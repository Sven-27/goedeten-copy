
using System.ComponentModel.DataAnnotations;

namespace Logic.DataTransferObjects
{
    public class DishCategoryDto 
    {
        public int Id { get; set; }
        [Required] public string Name { get; set; }

    }
}