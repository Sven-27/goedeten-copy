using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;


namespace Data.Configurations
{
    public class AllergenConfiguration : IEntityTypeConfiguration<Allergen>

    {
        public void Configure(EntityTypeBuilder<Allergen> builder)
        {
            builder.HasData(
               new List<Allergen> {
                    new Allergen{
                       Id =1,
                       Name = "noten"
                    },
                    new Allergen{
                       Id =2,
                       Name = "gluten"
                    },
                    new Allergen{
                       Id =3,
                       Name = "ei"
                    },

                    new Allergen{
                       Id =4,
                       Name = "pinda"
                    },
                    new Allergen{
                       Id =5,
                       Name = "soja"
                    },
                    new Allergen{
                       Id =6,
                       Name = "melk"
                    },
                    new Allergen{
                       Id =7,
                       Name = "schaaldieren"
                    },
                    new Allergen{
                       Id =8,
                       Name = "weekdieren"
                    },
                    new Allergen{
                       Id =9,
                       Name = "selderij"
                    },
                    new Allergen{
                       Id =10,
                       Name = "mosterd"
                    },
                    new Allergen{
                       Id =11,
                       Name = "sesamzaad"
                    },
                    new Allergen{
                       Id =12,
                       Name = "sulfiet"
                    },
                    new Allergen{
                       Id =13,
                       Name = "lupine"
                    },
                     new Allergen{
                       Id =14,
                       Name = "vis"
                    }
               }
               );
        }
    }
}
