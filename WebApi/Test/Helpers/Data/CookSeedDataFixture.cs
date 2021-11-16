using System;
using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;

namespace Test.Helpers.Data
{

    public class CookSeedDataFixture : IDisposable
    {
        public MainDbContext MainDbContext { get; private set; }

        public CookSeedDataFixture()
        {
            var options = new DbContextOptionsBuilder<MainDbContext>()
                .UseInMemoryDatabase("MovieListDatabase")
                .Options;

            MainDbContext = new MainDbContext(options);

            MainDbContext.Cooks.Add(new Cook
            {
                Id = 1,
                Name = "Henk van den Tillaard",
                Description = "Best cook ever!!"
            });
            MainDbContext.Cooks.Add(new Cook
            {
                Id = 2,
                Name = "Joop van Ellende",
                Description = "Worst cook ever!!"
            });
            MainDbContext.Customers.Add(new Customer
            {
                Id = 1,
                Email = "testing@test.nl",
                Zipcode = "1111AB",
                IsDeliveryRange = true,
                Date = DateTime.Now
            });
            MainDbContext.Customers.Add(new Customer
            {
                Id = 2,
                Email = "test@test.nl",
                Zipcode = "1111AB",
                IsDeliveryRange = true,
                Date = DateTime.Now
            });
            MainDbContext.SaveChanges();
        }

        public void Dispose()
        {
            MainDbContext.Dispose();
        }
    }
}
