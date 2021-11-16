using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;


namespace Data.Configurations
{
    public class CookAvailabilityConfiguration : IEntityTypeConfiguration<CookAvailability>
    {
        public void Configure(EntityTypeBuilder<CookAvailability> builder)
        {
            builder.Property(c => c.Available)
                .HasDefaultValue(true);
        }
    }
}
