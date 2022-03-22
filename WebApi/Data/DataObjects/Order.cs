using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.Enums;

namespace Data.DataObjects
{
   

    [Table("Order", Schema = "GoedEten")]
    public class Order : IEntity
    {
       
        public int Id { get; set; }
        public string OrderNumber { get; set; }
        [Required, Column(TypeName = "DateTime2(0)")]
        public DateTime OrderDate { get; set; }
        public decimal NoVatPrice { get; set; }
        public decimal LowVatPrice { get; set; }
        public decimal HighVatPrice { get; set; }
        public decimal TotalAmount { get; set; }
        public ICollection<OrderDelivery> Deliveries { get; set; }
        public ICollection<OrderTransaction> Transactions { get; set; }
        [Required]
        public OrderStatus Status { get; set; }
        //      public Address BillingAddress { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public int HouseNumber { get; set; }
        public string AddHouseNumber { get; set; }
        [Required]
        public string Zipcode { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        public string Details { get; set; }        
        public string Dietdetails { get; set; }

    }
    
    //[Owned]
    //public class Address
    //{     
        
    //    [Required]
    //    public string FirstName { get; set; }
    //    [Required]
    //    public string LastName { get; set; }
    //    [Required]
    //    public string Street { get; set; }        
    //    public int HouseNumber { get; set; }        
    //    public string AddHouseNumber { get; set; }
    //    [Required]
    //    public string Zipcode { get; set; }
    //    [Required]
    //    public string City { get; set; }

    //}
}

