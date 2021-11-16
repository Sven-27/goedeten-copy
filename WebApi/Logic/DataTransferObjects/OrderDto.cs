using CrossCuttingConcerns.Enums;
using System;
using System.Collections.Generic;


namespace Logic.DataTransferObjects
   
{   
    public class OrderDto
    {
        public int Id { get; set; }
        public string OrderNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal LowVatAmount { get; set; }
        public decimal HighVatAmount { get; set; }
        public decimal TotalAmount { get; set; }            
        public ICollection<OrderDeliveryDto> Deliveries { get; set; }
        public ICollection<OrderTransactionDto> Transactions { get; set; }

        //public Address BillingAddress { get; set; }
        //public Address DeliveryAddress { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public int HouseNumber { get; set; }
        public string AddHouseNumber { get; set; }
        public string Zipcode { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Details { get; set; }
        public string Dietdetails { get; set; }
        public OrderStatus Status { get; set; }

    }
    
  
}

