using CrossCuttingConcerns.Enums;
using CrossCuttingConcerns.Exceptions;
using CrossCuttingConcerns.Functional;
using CrossCuttingConcerns.Settings;
using CrossCuttingConcerns.Validations;
using Data.DataObjects;
using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WepApi.Infrastructure;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IEmailService _emailService;
        private readonly AppSettings _appSettings;
     //   private readonly IHttpContextAccessor _httpContextAccessor;

        public UserController( 
            IUserService userService,
            IEmailService emailService,
          //  IHttpContextAccessor httpContextAccessor,
            IOptions<AppSettings> appSettings
           )
            
        {
            _userService = userService;
            _emailService = emailService;
            _appSettings = appSettings.Value;
       //     _httpContextAccessor = httpContextAccessor;
        }

        [AllowAnonymous]
        [HttpPost("TestEmail")]
        public async Task<IActionResult> TestEmail(string toAddress)
        {
            await _emailService.TestEmail(toAddress).ConfigureAwait(false);
            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] UserLogInDto userDto)
        {
            var user = await _userService.Authenticate(userDto.UserName, userDto.Password, true).ConfigureAwait(false);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });
            if (user.NeedsPasswordReset)
                return BadRequest(new { message = "User has to reset his password!!!" });

            var _userHelpers = new UserHelpers(_appSettings);
            var tokenString = _userHelpers.UserTokenCreate(user.Id.ToString(), user.Role);

          

            // Cookie creation
            //CookieOptions options = new CookieOptions
            //{
            //    Expires = DateTime.Now.AddDays(3), // old method of expiring cookies
            //    MaxAge = TimeSpan.FromDays(3), // new(er) method of expiring cookies
            //    SameSite = SameSiteMode.None,
            //    IsEssential = true,
            //    Path = "/admin",
            //    Secure = false,
            //    //Domain = "goedeten.nl",
            //   // HttpOnly = true
            //};
            
            ////options.Secure = true;
            
            //_httpContextAccessor.HttpContext.Response.Cookies.Append("userInfo", tokenString, options);
            //_httpContextAccessor.HttpContext.Response.Cookies.Append("userName", user.Username, options);

            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                user.Id,
                user.Username,
                user.Name,
                user.Role,
                Token = tokenString
            });
        }
        //// ++++++++++++++++++++  NOG NIET!!!!!!!!!!!
        //[AllowAnonymous]
        //[HttpPost("activate")]
        //public async Task<IActionResult> Activate([FromBody] UserLogInDto activateUserDto)
        //{
        //    var userDto = await _userService.GetByUserName(activateUserDto.UserName).ConfigureAwait(false);
            
        //    if ( userDto== null)
        //    {
        //        return BadRequest(new { message = "Username is incorrect" });
        //    }

        //    if (!userDto.NeedsPasswordReset) 
        //    {
        //        return BadRequest(new { message = "password reset is not required!" });
        //    }
            
        //    var user = await _userService.Authenticate(activateUserDto.UserName, activateUserDto.Password, false).ConfigureAwait(false);

        //    if (user == null)
        //        return BadRequest(new { message = "Username or password is incorrect" });
            
        //    return Ok();
        //}
        ////++++++++++++++++++++++++++++++++++++++++++++++++++++

        [Authorize(Roles = AuthRoles.SuperAdmin)]
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserDto userDto)
        {
            try
            {
                if (!EmailValidation.IsValidEmail(userDto.Username))
                {
                    return BadRequest("Incorrect Email address used for username");
                }

                // save, always make sure the new user has no rights!
                userDto.Role = UserRole.NoAccess.ToString();
                userDto.ResetCode = "secret_code"; /// soon ( if all works nice) we have to generate random resetCode
                await _userService.Create(userDto, _appSettings.TempPassword).ConfigureAwait(false);
                await _emailService.ResetPasswordEmailMessage(userDto.Username).ConfigureAwait(false);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }
        [AllowAnonymous]
        [HttpGet]
        
         public async Task<ActionResult> GetCurrentUser()
        {
            var userIdstr = User.FindFirstValue(ClaimTypes.Name);
            if (userIdstr != null){
                var userId = int.Parse(userIdstr);
                var userDto = await _userService.GetById(userId).ConfigureAwait(false);
                return Ok(userDto);
            } else {
                return NotFound(null);
            }          
        }

        [Authorize(Roles = AuthRoles.SuperAdmin)]        
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var userDtos = await _userService.GetAll().ConfigureAwait(false);
            return Ok(userDtos);
        }

        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //[Authorize(Roles = AuthRoles.SuperAdmin)]
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetById(int id)
        //{
        //    var userDto = await _userService.GetById(id).ConfigureAwait(false);
        //    return Ok(userDto);
        //}
        ////++++++++++++++++++++++++++++++++++++++++++++++++++++++++



        [Authorize(Roles = AuthRoles.SuperAdmin)]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UserDto userDto)
        {
            // map dto to entity and set id
            userDto.Id = id;

            try
            {
                // save 
                await _userService.Update(userDto, userDto.Password).ConfigureAwait(false);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPut("ResetPasswordAfterActivation/{id}")]
        public async Task<IActionResult> ResetPasswordAfterActivation(int id, [FromBody] UserDto userDto)
        {
            // map dto to entity and set id
            userDto.Id = id;            
            if (userDto.Role == UserRole.NoAccess.ToString())
            {
                userDto.Role = UserRole.Admin.ToString();
            }
            try
            {
                // save 
                await _userService.Update(userDto, userDto.Password).ConfigureAwait(false);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [Authorize(Roles = AuthRoles.SuperAdmin)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _userService.Delete(id).ConfigureAwait(false);
            return Ok();
        }


        [Authorize(Roles = AuthRoles.SuperAdmin)]
        [HttpGet("ResetPassword/{id}")]
        public async Task<IActionResult> ResetPassword(int id)
        {
        
            
            try
            {
                // save 
                var user = await _userService.UpdatePass(id).ConfigureAwait(false);
                await _emailService.ResetPasswordEmailMessage(user.Username).ConfigureAwait(false);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        


    }
}
