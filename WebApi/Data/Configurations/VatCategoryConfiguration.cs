using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class VatCategoryConfiguration: IEntityTypeConfiguration<VatCategory>
    {
        public void Configure(EntityTypeBuilder<VatCategory> builder)
        {

            builder.HasData(
            new List<VatCategory> {
                    new VatCategory{
                       Id =1,
                       Name = "HIGH",
                       Value= 21
                    },
                    new VatCategory{
                       Id =2,
                       Name = "LOW",
                       Value= 9
                    },
                    new VatCategory{
                       Id =3,
                       Name = "ZERO",
                       Value= 0
                    },
                    new VatCategory{
                       Id =4,
                       Name = "NONE",
                       Value= 0
                    },
               });
        }
    }
}
