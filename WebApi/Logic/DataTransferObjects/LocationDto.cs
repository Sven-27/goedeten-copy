using System.ComponentModel.DataAnnotations;

namespace Logic.DataTransferObjects
{
    public class LocationDto
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
