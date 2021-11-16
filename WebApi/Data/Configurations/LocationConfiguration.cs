using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class LocationConfiguration: IEntityTypeConfiguration<Location>
    {
        public void Configure(EntityTypeBuilder<Location> builder)
        {
            builder.HasData(
               new List<Location> {
                    new Location{
                       Id =1,
                       Name = "'s-Gravenhage",
                       Email = "msshubna@gmail.com"
                    },
                    new Location{
                       Id =2,
                       Name = "Rotterdam",
                       Email = "niels.gras.bee@outlook.com"
                    },
                    new Location{
                       Id =3,
                       Name = "Amsterdam",
                       Email = "maryna.shubna.bee@outlook.com"
                    }                    
               }
               );
        }
    }
}
