using System;
using System.Collections.Generic;
using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;

namespace Test.Helpers.Data
{

    public class ZipCodeRegistrySeedDataFixture : IDisposable
    {
        public MainDbContext MainDbContext { get; private set; }

        public ZipCodeRegistrySeedDataFixture()
        {
            var options = new DbContextOptionsBuilder<MainDbContext>()
                .UseInMemoryDatabase("ZipCodesRegistryTestDatabase")
                .Options;

            MainDbContext = new MainDbContext(options);
            var zipSeed = new List<ZipCodeRegistry>
            {
                new ZipCodeRegistry
                {
                    Id = 1,
                    Zip = "6137LN",
                    Date = DateTime.Now
                },
                new ZipCodeRegistry
                {
                    Id = 2,
                    Zip = "6039AJ",
                    Date = DateTime.Now
                }
                

            };

            MainDbContext.ZipCodesRegistry.AddRange(zipSeed);
            MainDbContext.SaveChanges();
            
            zipSeed.ForEach(SetDetachedState);
            MainDbContext.SaveChanges();


            void SetDetachedState(ZipCodeRegistry zip)
            {
                MainDbContext.Entry<ZipCodeRegistry>(zip).State = EntityState.Detached;
            }
        }

        public void Dispose() => MainDbContext.Dispose();
        
    }
}
