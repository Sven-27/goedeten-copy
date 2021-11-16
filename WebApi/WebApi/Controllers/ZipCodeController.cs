using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Logic.Services;
using Logic.DataTransferObjects;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using WepApi.Infrastructure;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ZipCodeController : ControllerBase
    {
        private readonly IZipCodeService _zipCodeService;

        public ZipCodeController(IZipCodeService zipCodeService)
        {
            _zipCodeService = zipCodeService;


        }

        [AllowAnonymous]
        // GET: api/zipcode
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var zipCodeList = await _zipCodeService
                .GetAll()
                .ConfigureAwait(false);
            if (zipCodeList != null) return Ok(zipCodeList);
            return BadRequest();
        }

        [AllowAnonymous]
        // GET: api/zipcode
        [HttpGet("VerifyByZipcode")]
        public async Task<IActionResult> VerifyByZipcode(string zipcode, string houseNumber)
        {
            var result = await _zipCodeService.Verify(zipcode, houseNumber).ConfigureAwait(false);
            return result != null ? Ok(result) : BadRequest(false);
        }


        [AllowAnonymous]
        [HttpPost("getlist")]
        public async Task<IActionResult> GetList(PaginatedListDto paginatedList)
        {
            var zipList = await _zipCodeService
                .GetList(paginatedList);

            if (zipList != null) return Ok(zipList);
            return BadRequest();
        }



        [AllowAnonymous]
        // GET: api/zipCode/1
        [HttpGet("{zipId}")]
        public async Task<IActionResult> Get(int zipId)
        {
            var zipCodeData = await _zipCodeService
                .GetById(zipId)
                .ConfigureAwait(false);
            if (zipCodeData != null) return Ok(zipCodeData);
            return NotFound();
        }

        [AllowAnonymous]
        // GET: api/zipCode/6137LN
        [HttpGet("zip/{zip}")]
        public async Task<IActionResult> GetByZip(string zip)
        {
            zip = zip.ToUpper().Replace(" ", "").Substring(0, 4);
            var zipCodeData = await _zipCodeService.GetByZip(zip);
            return Ok(zipCodeData);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/zipCode
        [HttpPost]
        public async Task<IActionResult> Create(ZipCodeDto zip)
        {
            if (ModelState.IsValid)
            {
                zip.Zip = zip.Zip.ToUpper().Replace(" ", "");
                var createdZipCode = await _zipCodeService
                    .Create(zip)
                    .ConfigureAwait(false);
                if (createdZipCode != null) return Ok(createdZipCode);
            }
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/zipCode/1
        [HttpDelete("{zipId}")]
        public async Task<IActionResult> Delete(int zipId)
        {
            if (await _zipCodeService.Delete(zipId).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/zipCode/1
        [HttpPut]
        public async Task<IActionResult> Update(ZipCodeDto zip)
        {
            if (ModelState.IsValid)
                zip.Zip = zip.Zip.ToUpper().Replace(" ", "");
            if (await _zipCodeService
                .Update(zip)
                .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/zipCode/bundel
        [HttpPost("bundle")]
        public async Task<IActionResult> CreateBundle(List<ZipCodeDto> zip)
        {

            if (await _zipCodeService.CreateBundle(zip)
               .ConfigureAwait(false)) return Ok();
            return BadRequest(false);

        }

    }
}
