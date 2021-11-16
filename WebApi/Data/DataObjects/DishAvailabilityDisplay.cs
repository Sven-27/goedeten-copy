using System;

namespace Data.DataObjects
{
    public class DishAvailabilityDisplay
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int CurrentQuantity { get; set; }
        public int PlannedQuantity { get; set; }
        public int SoldQuantity { get; set; }
        public int DishId { get; set; }
        public string DishName { get; set; }
        public string DishShortName { get; set; }
        
        public string DishDescription { get; set; }
        public string DishCuisine { get; set; }
        public string DishPhoto { get; set; }
        public int CookId { get; set; }
        public string CookName { get; set; }
        public string CookPhoto { get; set; }
        public string LocationName { get; set; }
        public string DishCategoryName { get; set; }
        public VatCategory VatCategory { get; set; }
    }
}
