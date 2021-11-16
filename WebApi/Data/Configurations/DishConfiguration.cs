using System.Collections.Generic;
using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configurations
{
    public class DishConfiguration : IEntityTypeConfiguration<Dish>
    {
        public void Configure(EntityTypeBuilder<Dish> builder)
        {
            builder.HasData(
                new List<Dish>
                {
                    new Dish
                    {
                        Id = 1,
                        Name = "The Souk",
                        ShortName = "The Souk",
                        Description = "Wokgerecht met brocoli, pompoen en kikkererwten ",
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgega22upbs5kr.png",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        PriceLarge = 10m,
                        CookId = 1,
                        CuisineId = 2,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 40,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                    new Dish
                    {
                        Id = 2,
                        Name ="Vega burger",
                        ShortName ="Vega burger",
                        Description = "Falafelburger met kikkererwten op een laagje van humus ",
                        Photo =  "https://goedetendenhaag.nl/wp-content/uploads/2018/03/Wraps-soep-en-burgers-9-1-1.jpg" ,
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        PriceLarge = 5m,
                        CookId = 2,
                        CuisineId = 4,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 24,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",


                    },
                    new Dish
                    {
                        Id = 3,
                        Name = "Turmeric Power",
                        ShortName = "Turmeric Power",
                        Description = "Soep met pepers, kip en taugé, getopt met een half eitje ",
                        Photo =  "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fger4lbsgyk3fp.png",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        PriceLarge = 8m,
                        CookId = 3,
                        CuisineId = 2,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 30,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                    new Dish
                    {
                        Id = 4,
                        Name = "Beef burger",
                        ShortName = "Beef burger",
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgevbrrosgpmpq.png",
                        Description = "Burger met kaas en tomaat, met een salade van veldsla, paprika en pijnboompitjes ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        PriceLarge = 5m,
                        CookId = 4,
                        CuisineId = 4,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 34,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                    new Dish
                    {
                        Id = 5,
                        Name ="Jakarta",
                        ShortName ="Jakarta",
                        Description = " ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten ",
                        Photo =  "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgegc204gy2bhr.png",
                        PriceLarge = 5m,
                        CookId = 5,
                        CuisineId = 2,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 20,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                    new Dish
                    {
                        Id = 6,
                        Name = "Maaltijdwrap vega",
                        ShortName = "Wrap vega",
                        Description = "Wrap met groentes en currykruiden ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgexjoarfatwz4.png",
                        PriceLarge = 9m,
                        CookId = 6,
                        CuisineId = 3,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 25,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },

                    new Dish
                    {
                        Id = 7,
                        Name = "Curry-no-curry",
                        ShortName = "Curry",
                        Description = "",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo ="https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgefxorvmah1ce.png",
                        PriceLarge = 19.50m,
                        CookId = 6,
                        CuisineId = 2,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 30,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                    new Dish
                    {
                        Id = 8,
                        Name = "Saoto soup",
                        ShortName = "Saoto soup",
                        Description = "Saoto soep is een heldere kippensoep uit de Javaanse keuken." +
                        " Gemaakt van verse kruiden en geserveerd met gepluiste kip, gekookt ei," +
                        " tauge, gebakken aardappel, vermicelli, knoflook en uien. Eventueel met witte rijst.",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo ="https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge2gkstyijwzr.png",
                        PriceLarge = 5m,
                        CookId = 7,
                        CuisineId = 2,
                        DishCategoryId = 2,
                        VatCategoryId = 2,
                        MaxQuantity = 50,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                    new Dish
                    {
                        Id = 9,
                        Name = "Maaltijdwrap kip",
                        ShortName = "Wrap kip",
                        Description = "Lekkere tortilla wraps gevuld met Mexicaans gekruide kip en paprika",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo =  "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge4eo1lfon53j.png",
                        PriceLarge = 3m,
                        CookId = 3,
                        CuisineId = 3,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 30,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                    new Dish
                    {
                        Id = 10,
                        Name ="Umami",
                        ShortName ="Umami",
                        Description = " Umami: de hartige smaak naast zoet, zuur, zout en bitter.  ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo =  "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgehwykzk2hnnb.png",
                        PriceLarge = 3m,
                        CookId = 5,
                        CuisineId = 2,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 20,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                      new Dish
                    {
                        Id = 11,
                        Name = "Spicy peanut",
                        ShortName = "Spicy peanut",
                        Description = "It’s peanutty and noodley. It’s a friend to all vegetables. It’s salad that’s… not really a salad. ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgeo3b024zwxiv.png",
                        PriceLarge = 3m,
                        CookId = 6,
                        CuisineId = 2,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 35,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                         new Dish
                    {
                        Id = 12,
                        Name = "Risotto van drie soorten rijst met seizoensgroenten en oude kaas",
                        ShortName = "Risotto",
                        Description = "Gemaakt van wilde zwarte rijst, wilde rode rijst en ronde zilvervliesrijst ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge11l21pejl0x.jpg",
                        PriceLarge = 12.50m,
                        CookId = 1,
                        CuisineId = 7,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 24,
                        P1= "Alle verse ingrediënten (groenten, zuivel) die voor de risotto gebruikt worden worden komen uit de omgeving van Den Haag (>50km). Minimaal 75% van de droogwaren zijn biologisch geproduceerde grondstoffen uit Europa. ",
                        P2= "Alle verse ingrediënten (groenten, zuivel) die gebruikt worden zijn seizoensgebonden. Daarom kunnen de groenten en de bereiding ervan verschillen per seizoen",
                        P3= "",
                        P4= "",
                        P5= "",

                    },
                            new Dish
                    {
                        Id = 13,
                        Name = "Lasagne",
                        ShortName = "Lasagne",
                        Description = "Eigengemaakte pastabladen met gestoofd rundvlees en bechamelsaus ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgev30lyf0wotx.png",
                        PriceLarge = 3m,
                        CookId = 4,
                        CuisineId = 5,
                        DishCategoryId = 1,
                        VatCategoryId = 2,
                        MaxQuantity = 20,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    },
                               new Dish
                    {
                        Id = 14,
                        Name = "Meze",
                        ShortName = "Meze",
                        Description = "Humus, baba hanoush, tabouleh en Yemenitische foel ",
                        Heating = "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten",
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgeicvd2fcsmjc.jpg",
                        PriceLarge = 3m,
                        CookId = 3,
                        CuisineId = 6,
                        DishCategoryId = 2,
                        VatCategoryId = 2,
                        MaxQuantity = 15,
                        P1= "Verhaaltje over waarom Lokaal",
                        P2= "Verhaaltje over waarom Seizoensgebonden",
                        P3= "Verhaaltje over waarom Duurzaam voor je lijf",
                        P4= "Verhaaltje over waarom Van knol tot blaad",
                        P5= "Verhaaltje over waarom Plantaardige Eiwitten",

                    }
                }
            );
        }
    }
}