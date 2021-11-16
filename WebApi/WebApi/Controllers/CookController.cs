using System.Threading.Tasks;
using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WepApi.Infrastructure;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/cook")]
    [ApiController]
    public class CookController : ControllerBase
    {
        private readonly ICookService _cookService;
        private readonly IFileManagerLogic _fileManagerLogic;

        public CookController(ICookService cookService, IFileManagerLogic fileManagerLogic)
        {
            _cookService = cookService;
            _fileManagerLogic = fileManagerLogic;
        }

        [AllowAnonymous]
        // GET: api/cook
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var cookList = await _cookService
                .GetAll()
                .ConfigureAwait(false);
            
            if (cookList != null) return Ok(cookList);
            return BadRequest();
        }

        [AllowAnonymous]
        // GET: api/cook/1
        [HttpGet("{cookId}")]
        public async Task<IActionResult> Get(int cookId)
        {
            var combinedCookData = await _cookService
                .GetById(cookId);

            return Ok(combinedCookData);
        }

        [AllowAnonymous]
        // GET Paginated List
        [HttpPost("getlist")]
        public async Task<IActionResult> GetList(PaginatedListDto paginatedList)
        {
            var cookList = await _cookService
                .GetList(paginatedList);
            
            if (cookList != null) return Ok(cookList);
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost("getfilteredlist")]
        public async Task<IActionResult> GetFilteredList(CookPagedFilterDto paginatedList)

        {
            var cookList = await _cookService
                   .GetFilteredList(paginatedList);

            if (cookList != null) return Ok(cookList);
            return BadRequest();
        }


        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // POST: api/cook
        [HttpPost]
        public async Task<IActionResult> Create(CookDto cook)
        {
            try {
                var result = await _cookService
                    .Create(cook).ConfigureAwait(false);
                    return Ok(result);
            }
            catch {
                return BadRequest(null);
            }
            
            
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/cook
        [HttpPut]
        public async Task<IActionResult> Update(CookDto cook)
        {
            if (await _cookService
                .Update(cook)
                .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/cook/1
        [HttpDelete("{cookId}")]
        public async Task<IActionResult> Delete(int cookId)
        {
            if (await _cookService
                .Delete(cookId)
                .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        [HttpPost("image")]
        public async Task<IActionResult> UploadImage([FromForm] ImageFileDto image)
        {
            if (image.ImageFile != null)
            {
                var result = await _fileManagerLogic.Upload(image, "cooks");
                return Ok(result);
            }

            return BadRequest(null);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        [HttpDelete("image/{fileName}")]
        public async Task<IActionResult> DeleteImage(string fileName)
        {
            await _fileManagerLogic.Delete(fileName);
            return Ok();
        }


    }
}