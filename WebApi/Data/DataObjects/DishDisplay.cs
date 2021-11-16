using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CrossCuttingConcerns.EntityFrameworkGenerics;

namespace Data.DataObjects
{
    
    public class DishDisplay
    {   
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public string Heating { get; set; }
        public string P1 { get; set; }
        public string P2 { get; set; }
        public string P3 { get; set; }
        public string P4 { get; set; }
        public string P5 { get; set; }
        public decimal PriceLarge { get; set; }
            
        public int CookId { get; set; }
        public string CookName { get; set; }
        public Cook Cook { get; set; }

        public int CuisineId { get; set; }
        public string CuisineName { get; set; }
        public Cuisine Cuisine { get; set; }
        public int DishCategoryId { get; set; }
        public string DishCategoryName { get; set; }
        public DishCategory DishCategory { get; set; }

        public ICollection<Ingredient> Ingredients { get; set; }
        public ICollection<Allergen> Allergens { get; set; }
       


    }
}