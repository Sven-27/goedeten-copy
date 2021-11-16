using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using CrossCuttingConcerns.EntityFrameworkGenerics;

namespace Data.DataObjects
{
    [Table("Dish", Schema = "GoedEten")]
    public class Dish : IEntity
    {
        public int Id { get; set; }
        [Required] [MaxLength(80)] public string Name { get; set; }
        [Required] [MaxLength(20)] public string ShortName { get; set; }
        [MaxLength(500)] public string Description { get; set; }
        [MaxLength(500)] public string Photo { get; set; }
        [MaxLength(500)] public string Heating { get; set; }
        [MaxLength(300)] public string P1 { get; set; }
        [MaxLength(300)] public string P2 { get; set; }
        [MaxLength(300)] public string P3 { get; set; }
        [MaxLength(300)] public string P4 { get; set; }
        [MaxLength(300)] public string P5 { get; set; }
        [Required, Column(TypeName = "decimal(5,2)")] 
        public decimal PriceLarge { get; set; }
              
        
        [Required] public int MaxQuantity { get; set; }

        [ForeignKey("Cook")] 
        public int CookId { get; set; }
        public Cook Cook { get; set; }

        [ForeignKey("Cuisine")] 
        public int CuisineId { get; set; }
        public Cuisine Cuisine { get; set; }

        [ForeignKey("DishCategory")] 
        public int DishCategoryId { get; set; }
        public DishCategory DishCategory { get; set; }

        [ForeignKey("VatCategory")]
        public int VatCategoryId { get; set; }
        public VatCategory VatCategory { get; set; }


        public ICollection<Ingredient> Ingredients { get; set; }
        public ICollection<Allergen> Allergens { get; set; }
        public ICollection<DishAvailability> DishAvailabilities { get; set; }


    }
}