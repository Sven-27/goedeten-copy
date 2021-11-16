using Data.DataObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class DishAvailabilityPlanningDto
    {
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public int CurrentQuantity { get; set; }
        public int PlannedQuantity { get; set; }
        public int DishId { get; set; }
        public string DishName { get; set; }
        public string DishCategory { get; set; }
        public int CookId { get; set; }
        public bool Planned { get; set; }

    }
}
