using CrossCuttingConcerns.EntityFrameworkGenerics;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Data.DataObjects
{
    [Table("Cuisine", Schema = "GoedEten")]
    public class Cuisine:IEntity
    {
        public int Id { get; set; }
        [Required, MaxLength(20)] public string Name { get; set; }
        public ICollection<Dish> Dishes { get; set; }
    }
}
