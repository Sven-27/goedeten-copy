using Data.DataObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class OrderCartDto
    {
        public int Id { get; set; }
        public DishAvailabilityDisplayDto Dish { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; } 
    }
}
