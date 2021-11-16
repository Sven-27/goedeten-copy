using System.ComponentModel.DataAnnotations;

namespace Logic.DataTransferObjects
{
    public class IngredientDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}