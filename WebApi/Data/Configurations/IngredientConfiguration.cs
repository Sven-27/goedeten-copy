using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class IngredientConfiguration : IEntityTypeConfiguration<Ingredient>
    {
        public void Configure(EntityTypeBuilder<Ingredient> builder)
        {
            builder.HasData(
               new List<Ingredient> {

                    new Ingredient {
                    Id = 1,
                    Name = "ronde zilvervliesrijst"
                    },
                    new Ingredient {
                    Id = 2,
                    Name = "zonnebloempitten"
                    },
                    new Ingredient {
                    Id = 3,
                    Name = "pompoenpitten"
                    },
                    new Ingredient {
                    Id = 4,
                    Name = "artisjokharten"
                    },
                    new Ingredient {
                    Id = 5,
                    Name = "zongedroogde tomaat"
                    },
                    new Ingredient {
                    Id = 6,
                    Name = "oude kaas"
                    },
                    new Ingredient {
                    Id = 7,
                    Name = "witte peper"
                    },
                    new Ingredient {
                    Id = 8,
                    Name = "zout"
                    },
                    new Ingredient {
                    Id = 9,
                    Name = "pijnboompitten"
                    },
                    new Ingredient {
                    Id = 10,
                    Name = "witte wijn (vegan)"
                    },
                    new Ingredient {
                    Id = 11,
                    Name = "pijnboompitten"
                    },
                    new Ingredient {
                    Id = 12,
                    Name = "tijm"
                    },
                    new Ingredient {
                    Id = 13,
                    Name = "oregano"
                    },
                    new Ingredient {
                    Id = 14,
                    Name = "olijfolie"
                    },
                    new Ingredient {
                    Id = 15,
                    Name = "knoflook"
                    },
                    new Ingredient {
                    Id = 16,
                    Name = "witte ui"
                    },
                    new Ingredient {
                    Id = 17,
                    Name = "zwarte rijst"
                    },
                    new Ingredient {
                    Id = 18,
                    Name = "rode rijst"
                    },
                    new Ingredient {
                    Id = 19,
                    Name = "rozemarijn"
                    },
                    new Ingredient {
                    Id = 20,
                    Name = "doperwten"
                    }

               });
        }
    }
}
