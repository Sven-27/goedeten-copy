using CrossCuttingConcerns.EntityFrameworkGenerics;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.DataObjects
{
    [Table("Ingredient", Schema = "GoedEten")]
    public class Ingredient : IEntity 
    {
        public int Id { get; set; }
        [Required] [MaxLength(50)]
        
        public string Name { get; set; }
        public ICollection<Dish> Dishes { get; set; }
    }
}
