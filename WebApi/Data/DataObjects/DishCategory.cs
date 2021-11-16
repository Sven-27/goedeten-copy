using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CrossCuttingConcerns.EntityFrameworkGenerics;

namespace Data.DataObjects
{
    [Table("DishCategory", Schema = "GoedEten")]
    public class DishCategory : IEntity
    {
        public int Id { get; set; }
        [Required, MaxLength(20)] public string Name { get; set; }
        public ICollection<Dish> Dishes { get; set; }
    }
}