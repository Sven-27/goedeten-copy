using CrossCuttingConcerns.EntityFrameworkGenerics;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.DataObjects
{
    [Table("CookAvailability", Schema = "GoedEten")]
    public class CookAvailability : IEntity   {
        public int Id { get; set; }
        [Required, Column(TypeName = "Date")]
        public DateTime Date { get; set; }
        [Required]
        public Cook Cook { get; set; }

        [ForeignKey("Cook")] public int CookId { get; set; }
        [Required]
        public bool? Available { get; set; }
    }
}
