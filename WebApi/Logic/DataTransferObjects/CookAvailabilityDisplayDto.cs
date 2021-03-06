using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class CookAvailabilityDisplayDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int CookId { get; set; }
        public bool? Available { get; set; }
        public string Name { get; set; }
        public string LocationName { get; set; }
    }
}
