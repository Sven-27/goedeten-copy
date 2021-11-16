using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WepApi.Infrastructure;

namespace WebApi.Controllers 
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationService _service;
        public LocationController(ILocationService service)
        {
            _service = service;
        }



        [AllowAnonymous]
        //GET: api/Location
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var resultList = await _service.GetAll()
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        //GET: api/Location/Id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _service
                .GetById(id)
                .ConfigureAwait(false);
            if (result != null) return Ok(result);
            return BadRequest();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/Location
        [HttpPost]
        public async Task<IActionResult> Create(LocationDto entity)
        {

            if (await _service.Create(entity).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/Location/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _service.Delete(id).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/Location/1
        [HttpPut]
        public async Task<IActionResult> Update(LocationDto entity)
        {
            if (ModelState.IsValid)
                if (await _service
                    .Update(entity)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }
    }
}
