using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using CrossCuttingConcerns.EntityFrameworkGenerics;

namespace Data.DataObjects
{
    [Table("Customer", Schema = "GoedEten")]
    public class Customer : IEntity
    {
        public int Id { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [RegularExpression(@"(?i)^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$")]
        public string Zipcode { get; set; }
        public bool IsDeliveryRange { get; set; }
        public DateTime Date { get; set; }
    }
}
