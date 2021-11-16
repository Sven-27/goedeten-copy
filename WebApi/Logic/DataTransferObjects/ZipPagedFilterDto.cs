using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class ZipPagedFilterDto:PaginatedListDto
    {
        
        public string ZipFilter { get; set; }
        public string CityFilter { get; set; }
        public string StreetFilter { get; set; }
        public bool? ActiveFilter { get; set; }
    }
}
