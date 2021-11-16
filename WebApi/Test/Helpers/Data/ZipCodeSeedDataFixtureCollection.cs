using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Test.Helpers.Data
{

    public class ZipCodeSeedDataFixtureCollection : IDisposable
    {
        public MainDbContext MainDbContext { get; private set; }
        public ZipCodeSeedDataFixtureCollection()
        {
            var options = new DbContextOptionsBuilder<MainDbContext>()
                  .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                  .Options;

            MainDbContext = new MainDbContext(options);

            // ... initialize data in the test database ...

            var zipSeed = new List<ZipCode>
            {


                new ZipCode
                {
                    Id = 1,
                    Zip = "6137",
                    LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 2,
                    Zip = "6039",
                    LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 3,
                    Zip = "1017",
                    LocationName = "'s-Gravenhage", 
                    Active = true
                },
                new ZipCode
                {
                    Id = 4,
                    Zip = "1011",
                     LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 5,
                    Zip = "1074",
                     LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 6,
                    Zip = "2512",
                     LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 7,
                    Zip = "2512",
                     LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 8,
                    Zip = "2512",
                     LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 9,
                    Zip = "2511",
                     LocationName = "'s-Gravenhage",
                    Active = true
                },
                new ZipCode
                {
                    Id = 10,
                    Zip = "2511",
                    LocationName = "'s-Gravenhage",
                    Active = true
                }


            };

            MainDbContext.ZipCodes.AddRange(zipSeed);
            MainDbContext.SaveChanges();

            zipSeed.ForEach(SetDetachedState);
            MainDbContext.SaveChanges();


            void SetDetachedState(ZipCode zip)
            {
                MainDbContext.Entry<ZipCode>(zip).State = EntityState.Detached;
            }



        }

        public void Dispose() => MainDbContext.Dispose();


    }

    [CollectionDefinition("ZipCodeTestCollection")]
    public class ZipCodeTestCollectionn : ICollectionFixture<ZipCodeSeedDataFixtureCollection>
    {
        // This class has no code, and is never created. Its purpose is simply
        // to be the place to apply [CollectionDefinition] and all the
        // ICollectionFixture<> interfaces.
    }



}
