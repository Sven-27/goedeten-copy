using CrossCuttingConcerns.EntityFrameworkGenerics;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DataObjects{
   
        [Table("VatCategory", Schema = "GoedEten")]
        public class VatCategory : IEntity
        {
            public int Id { get; set; }
            [Required, MaxLength(20)]
            public string Name { get; set; }            
            public decimal Value { get; set; }
        }
   

}

