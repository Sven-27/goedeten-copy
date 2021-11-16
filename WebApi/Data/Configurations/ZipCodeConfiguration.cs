using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class ZipCodeConfiguration : IEntityTypeConfiguration<ZipCode>
    {
//        int ZipStart = 2280;
//        List<ZipCode> Rijswijk = new List<ZipCode> { };


public void Configure(EntityTypeBuilder<ZipCode> builder)
        {

            builder.Property(z => z.Active)
               .HasDefaultValue(true);

            List<ZipCode> DenHaagList = new List<ZipCode> {
                    new ZipCode {
                        Id = 1,
                        Zip = "2270",
                        LocationName = "'s-Gravenhage",
                        Active = true
                    },
                    new ZipCode {
                        Id = 2,
                        Zip = "2271",
                        LocationName = "'s-Gravenhage",
                        Active = true
                    },
                    new ZipCode {
                        Id = 3,
                        Zip = "2272",
                        LocationName = "'s-Gravenhage",
                        Active = true
                    },
                    new ZipCode {
                        Id = 4,
                        Zip = "2273",
                        LocationName = "'s-Gravenhage",
                        Active = true
                    },
                    new ZipCode {
                        Id = 5,
                        Zip = "2274",
                        LocationName = "'s-Gravenhage",
                        Active = true
                    },
                    new ZipCode {
                        Id = 6,
                        Zip = "2275",
                        LocationName = "'s-Gravenhage",
                        Active = true
                    },
                };

            int i = 7;

            for (int zip = 2280; i <= 17; i++, zip++)
            {
                DenHaagList.Add(
                new ZipCode
                {
                    Id = i,
                    Zip = zip.ToString(),
                    LocationName = "'s-Gravenhage",
                    Active = true
                });
            }

            for (int zip = 2490; zip <= 2597; i++, zip++)
            {
                DenHaagList.Add(
                new ZipCode
                {
                    Id = i,
                    Zip = zip.ToString(),
                    LocationName = "'s-Gravenhage",
                    Active = true
                });
            }

            List<ZipCode> AmsterdamList = new List<ZipCode>();

            for (int zip = 1011; zip <= 1098; i++, zip++)
            {
                AmsterdamList.Add(
                    new ZipCode
                    {
                        Id = i,
                        Zip = zip.ToString(),
                        LocationName = "Amsterdam",
                        Active = true
                    });
            }

            List<ZipCode> RotterdamList = new List<ZipCode>();

            for (int zip = 3000; zip <= 3089; i++, zip++)
            {
                RotterdamList.Add(
                    new ZipCode
                    {
                        Id = i,
                        Zip = zip.ToString(),
                        LocationName = "Rotterdam",
                        Active = true
                    });
            }


            builder.HasData(DenHaagList);
            builder.HasData(AmsterdamList);
            builder.HasData(RotterdamList);
        }
    }
}
