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
    public class DishAvailabilityController : ControllerBase
    {
        private readonly IDishAvailabilityService _dishAvailabilityService;
        public DishAvailabilityController(IDishAvailabilityService service)
        {
            _dishAvailabilityService = service;
        }

        [AllowAnonymous]
        //GET: api/dishavailability
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var resultList = await _dishAvailabilityService.GetAll()
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        //GET: api/dishavailability/dishId
        [HttpGet("dish/{dishId}")]
        public async Task<IActionResult> GetByDishId(int dishId)
        {
            var resultList = await _dishAvailabilityService
                .GetByDishId(dishId)
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        //GET: api/dishavailability/Id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _dishAvailabilityService
                .GetById(id)
                .ConfigureAwait(false);
            if (result != null) return Ok(result);
            return BadRequest();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/dishavailability
        [HttpPost]
        public async Task<IActionResult> Create(DishAvailabilityDto entity)
        {
            try
            {
                var result = await _dishAvailabilityService.Create(entity).ConfigureAwait(false);
                return Ok(result);
            }

            catch
            {
                return BadRequest(false);
            }
            //if (await _dishAvailabilityService.Create(entity).ConfigureAwait(false)) return Ok(true);            
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/dishavailability/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _dishAvailabilityService.Delete(id).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [AllowAnonymous]
        // PUT Update: api/dishavailability
        [HttpPut]
        public async Task<IActionResult> Update(DishAvailabilityDto entity)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var result = await _dishAvailabilityService
                    .Update(entity)
                    .ConfigureAwait(false);
                    return Ok(result);
                }
                catch
                {
                }
            }
            return BadRequest(false);
        }

        [AllowAnonymous]
        [HttpGet("period/{date}/{numDays}")]
        public async Task<IActionResult> GetByPeriod(DateTime date, int numDays)
        {
            try
            {
                var result = await _dishAvailabilityService.GetByPeriod(date, numDays).ConfigureAwait(false);
                return Ok(result);
            }
            catch
            {
                return BadRequest();
            }

        }

        [AllowAnonymous]
        [HttpGet("date/{date}/{id}")]
        public async Task<IActionResult> GetByDate(DateTime date, int id)
        {
            try
            {
                var result = await _dishAvailabilityService.GetByDate(date, id).ConfigureAwait(false);
                return Ok(result);
            }
            catch
            {
                return BadRequest();
            }


        }
    }
}
