using Data.DataObjects;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Logic.DataTransferObjects
{
    public class DishDto

    {
        public int Id { get; set; }
        [Required] public string Name { get; set; }
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
        public string CookName { get; set; }
        public int CuisineId { get; set; }
        public string CuisineName { get; set; }
        public int DishCategoryId{ get; set; }
        public string DishCategoryName { get; set; }
        public int VatCategoryId { get; set; }
        public int MaxQuantity { get; set; }
        public ICollection<IngredientDto> Ingredients { get; set;}
        public ICollection<AllergenDto> Allergens { get; set;}
       // public ICollection<DishAvailabilityDto> DishAvailabilities{ get; set; }

    }
}