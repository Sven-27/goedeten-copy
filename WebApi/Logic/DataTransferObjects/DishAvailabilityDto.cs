using System;


namespace Logic.DataTransferObjects
{
    public class DishAvailabilityDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int CurrentQuantity { get; set; }
        public int PlannedQuantity { get; set; }
        public int DishId { get; set; }
    }
}
