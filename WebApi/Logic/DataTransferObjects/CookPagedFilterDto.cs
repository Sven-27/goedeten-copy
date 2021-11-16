using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class CookPagedFilterDto:PaginatedListDto
    {
         public string NameFilter { get; set; }
         public string LocationFilter { get; set; }
         public bool? ActiveFilter { get; set; }

    }
}
