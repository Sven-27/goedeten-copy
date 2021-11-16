using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class CuisineConfiguration : IEntityTypeConfiguration<Cuisine>
    {
        public void Configure(EntityTypeBuilder<Cuisine> builder)
        {
            builder.HasData(
                   new List<Cuisine> {
                    new Cuisine {
                        Id = 1,
                        Name = "Egyptisch"
                    },

                    new Cuisine {
                        Id = 2,
                        Name = "Indonesisch"
                    },
                    new Cuisine {
                        Id = 3,
                        Name = "Mexicaans"
                    },
                    new Cuisine {
                        Id = 4,
                        Name = "Hollands"
                    },
                    new Cuisine {
                        Id = 5,
                        Name = "Italiaans"
                    },
                    new Cuisine {
                        Id = 6,
                        Name = "Turks"
                    },
                    new Cuisine {
                        Id = 7,
                        Name = "Mediterrane"
                    }

                   });
        }
    }
}
