using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Logic.DataTransferObjects;
using Logic.Services;
using Data.DataObjects;
using DataLayer;
using Microsoft.AspNetCore.Authorization;
using WepApi.Infrastructure;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/ingredient")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        [AllowAnonymous]
        // GET: api/Ingredients
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var ingredients = await _ingredientService
                .GetAll()
                .ConfigureAwait(false);

            if (ingredients != null) return Ok(ingredients);
            return BadRequest();
        }

        [AllowAnonymous]
        // GET: api/Ingredients/5
        [HttpGet("{ingredientId}")]
        public async Task<IActionResult> Get(int ingredientId)
        {
            var ingredient = await _ingredientService
                .GetById(ingredientId);

            if (ingredient != null) return Ok(ingredient);
            return NotFound();
        }

        [AllowAnonymous]
        [HttpPost("getlist")]
        public async Task<IActionResult> GetList(PaginatedListDto paginatedList)
        {
            var ingredients = await _ingredientService
                .GetList(paginatedList);

            if (ingredients != null) return Ok(ingredients);
            return BadRequest();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // POST: api/Ingredients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> Create(IngredientDto ingredient)
        { 
            //if (ingredient.Date == DateTime.MinValue) ingredient.Date = DateTime.Now;
            if (ModelState.IsValid)
                if (await _ingredientService
                    .Create(ingredient)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT: api/Ingredients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> Update(IngredientDto ingredient)
        {
            if (ModelState.IsValid)
                if (await _ingredientService
                    .Update(ingredient)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/Ingredients/5
        [HttpDelete("{ingredientId}")]
        public async Task<IActionResult> Delete(int ingredientId)
        {
            if (await _ingredientService
                 .Delete(ingredientId)
                 .ConfigureAwait(false)) return Ok(true);
            return NotFound(false);
        }
        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        //POST : api/ingredients/bundel
        [HttpPost("bundle")]
        public async Task<IActionResult> CreateBundle(List<IngredientDto> bundle)
        {
            if( await _ingredientService.CreateBundle(bundle)
            .ConfigureAwait(false))return Ok();
            return BadRequest(false);


        }
    }
}
