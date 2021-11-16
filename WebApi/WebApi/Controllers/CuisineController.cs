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
    public class CuisineController : ControllerBase
    {
        private readonly ICuisineService _cuisineService;
        public CuisineController(ICuisineService service)
        {
            _cuisineService = service;
        }

        [AllowAnonymous]
        //GET: api/Cuisine
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var resultList = await _cuisineService.GetAll()
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        //GET: api/Cuisine/Id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _cuisineService
                .GetById(id)
                .ConfigureAwait(false);
            if (result != null) return Ok(result);
            return BadRequest();
        }


        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/Cuisine
        [HttpPost]
        public async Task<IActionResult> Create(CuisineDto entity)
        {

            if (await _cuisineService.Create(entity).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/Cuisine/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _cuisineService.Delete(id).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/Cuisine/1
        [HttpPut]
        public async Task<IActionResult> Update(CuisineDto entity)
        {
            if (ModelState.IsValid)
                if (await _cuisineService
                    .Update(entity)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }
    }
}
