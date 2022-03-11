using System.Collections.Generic;
using System.Threading.Tasks;
using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WepApi.Infrastructure;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/dish")]
    [ApiController]
    public class DishController : ControllerBase
    {
        private readonly IDishService _dishService;
        private readonly IFileManagerLogic _fileManagerLogic;
            

        public DishController(IDishService dishService, IFileManagerLogic fileManagerLogic)
        {
            _dishService = dishService;
            _fileManagerLogic = fileManagerLogic;
        }

        [AllowAnonymous]
        // GET: api/dish
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var dishList = await _dishService.GetAll().ConfigureAwait(false);
            if (dishList != null) return Ok(dishList);
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost("getlist")]
        public async Task<IActionResult> GetList(PaginatedListDto paginatedList)
        {
            var dishList = await _dishService
                .GetList(paginatedList);
            
            if (dishList != null) return Ok(dishList);
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost("getfilteredlist")]
        public async Task<IActionResult> GetFilteredList(DishPagedFilterDto paginatedList)
        {
            var dishList = await _dishService
                .GetFilteredList(paginatedList);
            
            if (dishList != null) return Ok(dishList);
            return BadRequest();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // POST: api/dish
        [HttpPost]
        public async Task<IActionResult> Create(DishDisplayDto dish)
        {
            //try {
                var result =await _dishService.Create(dish).ConfigureAwait(false);
                return Ok(result);  
            //}
            //catch
            //{
            //    return BadRequest(null);
            //}
        }

        [AllowAnonymous]
        // GET: api/dish/1
        [HttpGet("{dishId}")]
        public async Task<IActionResult> Get(int dishId)
        {
            var combinedDishData = await _dishService.GetById(dishId);
            return Ok(combinedDishData);
        }
        
        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/dish/1
        [HttpDelete("{dishId}")]
        public async Task<IActionResult> Delete(int dishId)
        {

            // deleting  photo from the blob
            var result = await _dishService.GetById(dishId);
            if (result != null & result.Photo.Length > 0) {
                var splittedFileName = result.Photo.Split("/");
                var length = splittedFileName.Length;
                    await _fileManagerLogic.Delete(splittedFileName[length -1]);
            }
            // deleting  photo from the blob

            if (await _dishService.Delete(dishId).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT Update: api/dish/1
        [HttpPut]
        public async Task<IActionResult> Update( DishDisplayDto dish)
        {
            if (await _dishService.Update( dish).ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        [HttpPost("image")]
        public async Task<IActionResult> UploadImage([FromForm] ImageFileDto image)
        {
            if (image.ImageFile != null)
            {
                var result = await _fileManagerLogic.Upload(image,"dishes");
                return Ok(result);
            }

            return BadRequest(null);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        [HttpDelete("image/{fileName}")]
        public async Task<IActionResult> DeleteImage(string fileName)
        {
            await _fileManagerLogic.Delete(fileName);
            return Ok();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        [HttpPut("{dishId}/allergens")]
        public async Task<IActionResult> SetAllergens(int dishId, List<int> allergens)
        {
            try {
                if (allergens == null) allergens = new List<int>();
                var result = await _dishService.SetAllergens(dishId, allergens);
                return Ok(result);
            }
            catch
            {
                return BadRequest(false);
            }
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        [HttpPut("{dishId}/ingredients")]
        public async Task<IActionResult> SetIngredients(int dishId, List<int> list)
        {
            try
            {
                // Todo Needs rework
                //Temp offline, needs rework
                //if (list == null) list = new List<int>();
                //var result = await _dishService.SetIngredients(dishId, list);
                //return Ok(result);
                return Ok();
            }
            catch
            {
                return BadRequest(false);
            }
        }



    }
}