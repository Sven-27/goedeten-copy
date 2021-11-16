using Data.DataObjects;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace Logic.DataTransferObjects
{
    public class CuisineDisplayDto

    {
        public int Id { get; set; }
        [Required]
        [MaxLength(20)]
        public string Name { get; set; }
        public ICollection<Dish> Dishes { get; set; }
    }
}
