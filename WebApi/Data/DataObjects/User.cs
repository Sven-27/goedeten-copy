using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Data.DataObjects
{

  

    [Table("User", Schema = "GoedEten")]
    public class User:IEntity
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(100)]
        [Required]
        public string Name { get; set; }
        [MaxLength(100)]
        [EmailAddress]
        [Required]
        public string Username { get; set; }
        public UserRole Role { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        // Password reset feature part
        public byte[] ResetCodeHash { get; set; }
        public byte[] ResetCodeSalt { get; set; }
        public bool NeedsPasswordReset { get; set; }      
    }
}
