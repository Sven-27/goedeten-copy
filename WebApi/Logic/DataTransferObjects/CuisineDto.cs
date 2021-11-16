
using Data.DataObjects;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Logic.DataTransferObjects
{
    public class CuisineDto
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(20)]
        public string Name { get; set; }
    }     
}
