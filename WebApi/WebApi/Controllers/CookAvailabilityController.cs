using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using WepApi.Infrastructure;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CookAvailabilityController : ControllerBase
    {
        private readonly ICookAvailabilityService _cookAvailabilityService;
        public CookAvailabilityController(ICookAvailabilityService service)
        {
            _cookAvailabilityService = service;
        }

        [AllowAnonymous]
        //GET: api/cookavailability
        [HttpGet]
        public async Task<IActionResult> GetAll() {
            var resultList = await _cookAvailabilityService.GetAll()
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpGet("date/{date}")]
        public async Task<IActionResult> GetByDate(DateTime date)
        {
            var result = await _cookAvailabilityService.GetByDate(date).ConfigureAwait(false);
            return Ok(result);
        }

        [AllowAnonymous]
        //GET: api/cookavailability/cookId
        [HttpGet("cook/{cookId}")]
        public async Task<IActionResult> GetByCookId(int cookId)
        {
            var resultList = await _cookAvailabilityService
                .GetByCookId(cookId)
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        //GET: api/cookavailability/Id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _cookAvailabilityService
                .GetById(id)
                .ConfigureAwait(false);
            if (result != null) return Ok(result);
            return BadRequest();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/cookavailability
        [HttpPost]
        public async Task<IActionResult> Create(CookAvailabilityDto entity)
        {
            
            if (await _cookAvailabilityService.Create(entity).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        // DELETE: api/cookavailability/1
        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _cookAvailabilityService.Delete(id).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/cookavailability/1
        [HttpPut]
        public async Task<IActionResult> Update(CookAvailabilityDto entity)
        {
            if (ModelState.IsValid)
                if (await _cookAvailabilityService
                    .Update(entity)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }
       

    }
}
