using Data.DataObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class OrderDishDto
    {
        public int Id { get; set; }
        public int  DishId { get; set; }

        public string DishName {get;set;}
        public string CookName {get;set;}
        public int Quantity { get; set; }
        public decimal Price { get; set; }        
        public int OrderDeliveryId { get; set; }
        public int DishAvailabilityId {get;set;}
        
    }
}
