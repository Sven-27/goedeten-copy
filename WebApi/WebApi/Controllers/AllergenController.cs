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
    [Route("api/allergen")]
    [ApiController]
    public class AllergenController : ControllerBase
    {
        private readonly IAllergenService _allergenService;

        public AllergenController(IAllergenService allergenService)
        {
            _allergenService = allergenService;
        }

        [AllowAnonymous]
        // GET: api/Allergens
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var allergens = await _allergenService
                .GetAll()
                .ConfigureAwait(false);

            if (allergens != null) return Ok(allergens);
            return BadRequest();
        }

        [AllowAnonymous]
        // GET: api/Allergens/5
        [HttpGet("{allergenId}")]
        public async Task<IActionResult> Get(int allergenId)
        {
            var allergen = await _allergenService
                .GetById(allergenId);

            if (allergen != null) return Ok(allergen);
            return NotFound();
        }

        [AllowAnonymous]
        [HttpPost("getlist")]
        public async Task<IActionResult> GetList(PaginatedListDto paginatedList)
        {
            var allergens = await _allergenService
                .GetList(paginatedList);

            if (allergens != null) return Ok(allergens);
            return BadRequest();
        }
        [AllowAnonymous]
        [HttpPost("getfilteredlist")]
        public async Task<IActionResult> GetFilteredList(AllergenPagedFilterDto paramList)

        {
            var paginatedList = new PaginatedListDto()
            {
                PageNumber = paramList.PageNumber,
                SortField = paramList.SortField,
                SortOrder = paramList.SortOrder,
                PageSize = paramList.PageSize

            };
            var list = await _allergenService
                   .GetFilteredList(paginatedList, paramList.nameFilter);

            if (list != null) return Ok(list);
            return BadRequest();
        }

        // POST: api/Allergens
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754


        [Authorize(Roles = AuthRoles.SuperAdmin+","+AuthRoles.Admin)]
        [HttpPost]
        public async Task<IActionResult> Create(AllergenDto allergen)
        { 
            if (ModelState.IsValid)
                if (await _allergenService
                    .Create(allergen)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT: api/Allergens/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> Update(AllergenDto allergen)
        {
            if (ModelState.IsValid)
                if (await _allergenService
                    .Update(allergen)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/Allergens/5
        [HttpDelete("{allergenId}")]
        public async Task<IActionResult> Delete(int allergenId)
        {
            if (await _allergenService
                 .Delete(allergenId)
                 .ConfigureAwait(false)) return Ok(true);
            return NotFound(false);
        }
    }
}
