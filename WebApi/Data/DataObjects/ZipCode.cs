
using CrossCuttingConcerns.EntityFrameworkGenerics;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.DataObjects
{
    [Table("ZipCode", Schema = "GoedEten")]
    public class ZipCode: IEntity
    {   [Required] 
        [MaxLength(4),RegularExpression(@"(?i)^[1-9][0-9]{3}$")]
        public string Zip { get; set; }
        // [MaxLength(255)] public string City { get; set; }

        // [MaxLength(255)] public string Street { get; set; }
        [Required, MaxLength(30)]
        public string LocationName {get;set;}
        
        public bool? Active { get; set; }
        public int Id { get; set; }
    }
}
