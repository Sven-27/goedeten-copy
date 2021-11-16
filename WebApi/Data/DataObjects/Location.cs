using CrossCuttingConcerns.EntityFrameworkGenerics;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.DataObjects
{
    [Table("Location", Schema = "GoedEten")]
    public class Location: IEntity
    {
        public int Id { get; set; }
        [Required, MaxLength(30)]
        public string Name { get; set; }
        [Required, MaxLength(60)]
        public string Email { get; set; }
    }
}
