using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CrossCuttingConcerns.EntityFrameworkGenerics;

namespace Data.DataObjects
{
    [Table("Cook", Schema = "GoedEten")]
    public class Cook : IEntity
    {
        public Cook()
        {
            Dishes = new List<Dish>();
        }

        [Required] [MaxLength(100)] public string Name { get; set; }

        [MaxLength(650)] public string Description { get; set; }
        [MaxLength(650)] public string Motivation { get; set; }
        [MaxLength(500)] public string Specialization { get; set; }

        [MaxLength(500)] public string Photo { get; set; }

        [Required] [MaxLength(200)] public string Address { get; set; }

        [MaxLength(20)] public string PhoneNumber { get; set; }

        [MaxLength(60)] public string Email { get; set; }

        [Required] public bool Active { get; set; }


        [MaxLength(30)] public string LocationName { get; set; }

        public List<Dish> Dishes { get; set; }
        public int Id { get; set; }
    }
}