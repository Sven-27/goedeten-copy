using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class DishCategoryConfiguration : IEntityTypeConfiguration<DishCategory>
    {
        public void Configure(EntityTypeBuilder<DishCategory> builder)
        {
            builder.HasData(
               new List<DishCategory> {
                    new DishCategory{
                       Id =1,
                       Name = "Hoofd Gerecht"
                    },
                    new DishCategory{
                       Id =2,
                       Name = "Voor Gerecht"
                    },
                    new DishCategory{
                       Id =3,
                       Name = "Na Gerecht"
                    },
                    new DishCategory{
                       Id =4,
                       Name = "Lokaal Product"
                    },
                    new DishCategory{
                       Id =5,
                       Name = "Leveranciers"
                    }

               }
               );
        }
    }
}