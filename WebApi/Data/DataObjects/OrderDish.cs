using System.ComponentModel.DataAnnotations.Schema;
using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.Enums;

namespace Data.DataObjects
{
   

    [Table("OrderDish", Schema = "GoedEten")]
    public class OrderDish : IEntity
    {
        public int Id { get; set; }
     
        public int Quantity { get; set; }

        public decimal Price { get; set; }
        
        public int OrderDeliveryId { get; set; }

        public int DishAvailabilityId {get;set;}

        [ForeignKey("Dish")]
        public int DishId { get; set; }
        public Dish Dish { get; set; }

        

    }
}