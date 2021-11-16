using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Logic.Services;
using Logic.DataTransferObjects;
using WepApi.Infrastructure;
using Microsoft.AspNetCore.Authorization;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ZipCodeRegistryController : ControllerBase
    {
        private readonly IZipCodeRegistryService _service;

        public ZipCodeRegistryController(IZipCodeRegistryService zipCodeService)
        {
            _service = zipCodeService;
        }

        [AllowAnonymous]
        // GET: api/zipCodeRegistry
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAll().ConfigureAwait(false);
            if (result != null) return Ok(result);
            return BadRequest();
        }

        [AllowAnonymous]
        // GET: api/zipCodeRegistry/1
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _service.GetById(id);
            if (result != null) return Ok(result);
            return NotFound();
        }

        [AllowAnonymous]
        // GET: api/zipCodeRegistry/6137LN
        [HttpGet("zip/{zip}")]
        public async Task<IActionResult> GetByZip(string zip)
        {
            zip = zip.ToUpper().Replace(" ", "");
            var result = await _service.GetByZip(zip);
            return Ok(result);
        }
        //POST : api/zipCodeRegistry

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Create(ZipCodeRegistryDto zip)
        {
            if (ModelState.IsValid)
                zip.Zip = zip.Zip.ToUpper().Replace(" ", "");
            if (await _service.Create(zip).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }
        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/zipCodeRegistry/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _service.Delete(id).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/zipCode/1
        [HttpPut]
        public async Task<IActionResult> Update(ZipCodeRegistryDto entity)
        {
            if (ModelState.IsValid)
                entity.Zip = entity.Zip.ToUpper().Replace(" ", "");
            if (await _service
                    .Update(entity)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }


    }
}
