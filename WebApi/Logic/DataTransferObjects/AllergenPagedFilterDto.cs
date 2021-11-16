using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class AllergenPagedFilterDto : PaginatedListDto
    {
        public string nameFilter { get; set; }
    }
}
