using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using System;

namespace Test
{
    public class SharedDatabaseFixture : IDisposable
    {
        public MainDbContext MainDbContext { get;}


        public SharedDatabaseFixture()
        {
            var options = new DbContextOptionsBuilder<MainDbContext>()
                .UseInMemoryDatabase("CustomerData")
                .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking)
                .Options;

            MainDbContext = new MainDbContext(options);

            Seed();
        }


        private void Seed()
        {
            var customerOne = new Customer()
            {
                Email = "this@email.nl",
                Date = DateTime.Now,
                Id = 1,
                IsDeliveryRange = true,
                Zipcode = "1234AB"
            };

            var customerTwo = new Customer()
            {
                Email = "that@email.nl",
                Date = DateTime.Now,
                Id = 2,
                IsDeliveryRange = false,
                Zipcode = "2345BC"
            };

            var customerThree = new Customer()
            {
                Email = "delete-test@email.nl",
                Date = DateTime.Now,
                Id = 3,
                IsDeliveryRange = true,
                Zipcode = "3456CD"
            };

            MainDbContext.Customers.Add(customerOne);
            MainDbContext.Customers.Add(customerTwo);
            MainDbContext.Customers.Add(customerThree);
            MainDbContext.SaveChanges();

            MainDbContext.Entry<Customer>(customerOne).State = EntityState.Detached;
            MainDbContext.Entry<Customer>(customerTwo).State = EntityState.Detached;
            MainDbContext.Entry<Customer>(customerThree).State = EntityState.Detached;

            MainDbContext.SaveChanges();
        }

        public void Dispose() => MainDbContext.Dispose();
    }
}
