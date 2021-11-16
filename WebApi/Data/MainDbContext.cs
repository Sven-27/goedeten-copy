using System;
using System.Collections.Generic;
using Data.Configurations;
using Data.DataObjects;
using Microsoft.EntityFrameworkCore;

namespace DataLayer
{
    /// <summary>
    ///     https://dotnetthoughts.net/how-to-mock-dbcontext-for-unit-testing/
    /// </summary>
    public interface IMainDbContext
    {
    }

    public class MainDbContext : DbContext, IMainDbContext
    {
        public DbSet<Cook> Cooks { get; set; }
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<ZipCode> ZipCodes { get; set; }
        public DbSet<ZipCodeRegistry> ZipCodesRegistry { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Allergen> Allergens { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderTransaction> OrderTransactions { get; set; }
        public DbSet<OrderDelivery> Deliveries { get; set; }
        public DbSet<OrderDish> DishOrders { get; set; }

        public DbSet<Cuisine> Cuisine { get; set; }
        public DbSet<DishAvailability> DishAvailabilities { get; set; }
        public DbSet<CookAvailability> CookAvailabilities { get; set; }
        public DbSet<DishCategory> DishCategories { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<VatCategory> VatCategories{ get; set; }

        public MainDbContext(DbContextOptions<MainDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ZipCodeConfiguration());
            modelBuilder.ApplyConfiguration(new DishConfiguration());
            modelBuilder.ApplyConfiguration(new DishAvailabilityConfiguration());
            modelBuilder.ApplyConfiguration(new CookConfiguration());
            modelBuilder.ApplyConfiguration(new CuisineConfiguration());
            modelBuilder.ApplyConfiguration(new IngredientConfiguration());
            modelBuilder.ApplyConfiguration(new AllergenConfiguration());
            modelBuilder.ApplyConfiguration(new CookAvailabilityConfiguration());
            modelBuilder.ApplyConfiguration(new DishCategoryConfiguration());
            modelBuilder.ApplyConfiguration(new LocationConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new VatCategoryConfiguration());
        }
    }
}