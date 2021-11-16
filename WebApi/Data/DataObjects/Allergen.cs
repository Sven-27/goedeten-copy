using CrossCuttingConcerns.EntityFrameworkGenerics;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DataObjects
{
    [Table("Allergen", Schema = "GoedEten")]
    public class Allergen: IEntity
    {
        public int Id { get; set; }
        [Required, MaxLength(20)]
        public string Name { get; set; }

        public ICollection<Dish> Dishes { get; set; }
    }
}
