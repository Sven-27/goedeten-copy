using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;


namespace Data.Configurations
{
    public class DishAvailabilityConfiguration : IEntityTypeConfiguration<DishAvailability>
    {
        public void Configure(EntityTypeBuilder<DishAvailability> builder)
        {
            builder.Property(d => d.CurrentQuantity)
                .HasDefaultValue(0);
            //builder.Property(d => d.MaxQuantity)
            //  .HasDefaultValue(0);
    
        }
    }
}
