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
    public class DishCategoryController : ControllerBase
    {
        private readonly IDishCategoryService _dishCategoryService;
        public DishCategoryController(IDishCategoryService service)
        {
            _dishCategoryService = service;
        }
        [AllowAnonymous]
        //GET: api/dishcategory
        [HttpGet]
        public async Task<IActionResult> GetAll() {
            var resultList = await _dishCategoryService.GetAll()
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        //GET: api/dishcategory/Id
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _dishCategoryService
                .GetById(id)
                .ConfigureAwait(false);
            if (result != null) return Ok(result);
            return BadRequest();
        }
        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/dishcategory
        [HttpPost]
        public async Task<IActionResult> Create( DishCategoryDto entity)
        {
            
            if (await _dishCategoryService.Create(entity).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/dishcategory/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (await _dishCategoryService.Delete(id).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/dishcategory/1
        [HttpPut]
        public async Task<IActionResult> Update(DishCategoryDto entity)
        {
            if (ModelState.IsValid)
                if (await _dishCategoryService
                    .Update(entity)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

       

    }
}
