namespace Logic.DataTransferObjects
{
    public class DishDisplayDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }
        public string Heating { get; set; }
        public string P1 { get; set; }
        public string P2 { get; set; }
        public string P3 { get; set; }
        public string P4 { get; set; }
        public string P5 { get; set; }

        public decimal PriceLarge { get; set; }
        public int CookId { get; set; }
        public int CuisineId { get; set; }
        public int DishCategoryId { get; set; }
        public int VatCategoryId { get; set; }
        public int MaxQuantity { get; set; }
        // Temp Field for storing all ingredients text
        public string AllIngredientsField { get; set; }
    }
}
