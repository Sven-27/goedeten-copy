using CrossCuttingConcerns.EntityFrameworkGenerics;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.DataObjects
{
    [Table("DishAvailability", Schema = "GoedEten")]
    public class DishAvailability :IEntity   {
        public int Id { get; set; }
        [Required, Column(TypeName = "DateTime2(0)")] public DateTime Date { get; set; }        
        [Required] public int CurrentQuantity { get; set; }
        [Required] public int PlannedQuantity { get; set; }
        [Required] public Dish Dish { get; set; }
        [ForeignKey("Dish")] public int DishId { get; set; }
    }
}
