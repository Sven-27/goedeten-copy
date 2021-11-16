using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WepApi.Infrastructure;

namespace WebApi.Controllers 
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class VatCategoryController : ControllerBase
    {
        private readonly IVatCategoryService _service;
        public VatCategoryController(IVatCategoryService service)
        {
            _service = service;
        }


        [AllowAnonymous]
        //GET: api/VatCategory
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var resultList = await _service.GetAll()
                .ConfigureAwait(false);
            if (resultList != null) return Ok(resultList);
            return BadRequest();
        }

        [AllowAnonymous]
        //GET: api/VatCategory/Id
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
        // PUT Update: api/VatCategory/1
        [HttpPut]
        public async Task<IActionResult> Update(VatCategoryDto entity)
        {
            if (ModelState.IsValid)
                if (await _service
                    .Update(entity)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }
    }
}
