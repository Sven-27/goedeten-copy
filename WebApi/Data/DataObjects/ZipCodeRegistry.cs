using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CrossCuttingConcerns.EntityFrameworkGenerics;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.DataObjects
{
    [Table("ZipCodeRegistry", Schema = "GoedEten")]
    public class ZipCodeRegistry : IEntity
    {
        [Required]
        [MaxLength(10), RegularExpression(@"(?i)^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$")]
        public string Zip { get; set; }

        [Required, Column(TypeName = "DateTime2(0)")]
        public DateTime Date { get; set; }

        public int Id { get; set; }
    }
}

