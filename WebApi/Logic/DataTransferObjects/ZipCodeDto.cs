using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class ZipCodeDto

    {
        public int Id { get; set; }
        [Required, MaxLength(4), RegularExpression(@"(?i)^[1-9][0-9]{3}$")]
        public string Zip { get; set; }
        [Required, MaxLength(30)]
        public string LocationName { get; set; }
        public bool? Active { get; set; }

    }
}
