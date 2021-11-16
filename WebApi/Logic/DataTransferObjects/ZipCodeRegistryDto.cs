using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class ZipCodeRegistryDto
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(10), RegularExpression(@"(?i)^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$")]
        public string Zip { get; set; }
        public DateTime Date { get; set; }

    }  

}
