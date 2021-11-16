using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CrossCuttingConcerns.EntityFrameworkGenerics;

namespace Data.DataObjects
{
    [Table("OrderDelivery", Schema = "GoedEten")]
    public class OrderDelivery : IEntity
    {
        public int Id { get; set; }
        
        [Required, Column(TypeName = "DateTime2(0)")] 
        public DateTime DeliveryDate { get; set; }
        public decimal DeliveryPrice { get; set; }

        public decimal TotalPrice { get; set; }

        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public ICollection<OrderDish> DishOrders { get; set; }

    }
}