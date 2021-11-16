using System;
using System.Collections.Generic;
using Data.DataObjects;


namespace Logic.DataTransferObjects
   
{   
    public class OrderEasyDto
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Street { get; set; }
        public int HouseNumber { get; set; }
        public string AddHouseNumber { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Details { get; set; }
        public string Dietdetails { get; set; }
        public string Status { get; set; }    
        public decimal TotalAmount { get; set; }
        public ICollection<OrderCartDto> Cart { get; set; }
    }
    
  }

