using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Logic.DataTransferObjects
{
    public class CookAvailabilityDto
    {
        public int Id { get; set; }
        [Required, Column(TypeName = "Date")]
        public DateTime Date { get; set; }
        [Required]
        public int CookId { get; set; }
        public bool Available { get; set; }
    }
}
