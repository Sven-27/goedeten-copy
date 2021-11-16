using Data.DataObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class OrderDeliveryDto
    {
        public int Id { get; set; }        
        public decimal DeliveryPrice { get; set; }
        public DateTime DeliveryDate { get; set; }

        public decimal TotalPrice { get; set; }
        public int OrderId { get; set; }
        public ICollection<OrderDishDto> DishOrders { get; set; }

    }
}
