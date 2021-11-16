using System.Collections.Generic;
using System.Threading.Tasks;
using Logic.DataTransferObjects;
using Logic.Services;

namespace WebApi
{
    public static class Seed
    {
        public static async Task SeedData(ICookService cookService)
        {
            var cookList = await cookService.GetAll().ConfigureAwait(false);
            if (cookList.Count != 0) return;

            var cooks = new List<CookDto>
            {
                new CookDto
                {
                    Name = "Henk",
                    Description = "Goede kok",
                    Address = "Heerlen",
                    Email = "henk@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Ingrid",
                    Description = "Goede kokkin",
                    Address = "Heerlen",
                    Email = "ingrid@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Sahar",
                    Description = "Egyptische specialiteiten",
                    Address = "Geleen",
                    Email = "sahar@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Sven",
                    Description = "Topchef",
                    Address = "Heerlen",
                    Email = "sven@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Sigrid",
                    Description = "Erwten koningin",
                    Address = "Heerlen",
                    Email = "sigrid@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Rosanne",
                    Description = "Houdt het overzicht",
                    Address = "Heerlen",
                    Email = "rosanne@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Rowan",
                    Description = "Vette hap meester",
                    Address = "Heerlen",
                    Email = "rowan@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Ward",
                    Description = "Baas boven baas",
                    Address = "Heerlen",
                    Email = "ward@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Maryna",
                    Description = "Partizanen eten gratis",
                    Address = "Sittard",
                    Email = "maryna@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Niels",
                    Description = "Laat liever anderen koken",
                    Address = "Hoensbroek",
                    Email = "niels@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Robert",
                    Description = "Koken doe je met gevoel",
                    Address = "Maastricht",
                    Email = "robert@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Anne-Christi",
                    Description = "Elke dag een nieuwe special",
                    Address = "Margraten",
                    Email = "anne-christi@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Wesley",
                    Description = "Creatief met spruitjes",
                    Address = "Kirchroa",
                    Email = "wesleyd@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Frank",
                    Description = "En nu eten!",
                    Address = "Heerlen",
                    Email = "frank@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Benjamin",
                    Description = "Mag het een hapje meer zijn?",
                    Address = "Belgie",
                    Email = "benjamin@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                },
                new CookDto
                {
                    Name = "Daniel",
                    Description = "Number four",
                    Address = "Margraten",
                    Email = "daniel@test.nl",
                    PhoneNumber = "012231314242",
                    Active = true
                }
            };

            await cookService.CreateBundle(cooks);
        }
    }
}