using CrossCuttingConcerns.Enums;
using CrossCuttingConcerns.Functional;

using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>

    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            UserHelpers.CreatePasswordHash("testtest", out var passwordHash, out var passwordSalt);
            UserHelpers.CreatePasswordHash("testtest", out var resetCodeHash, out var resetCodeSalt);

            builder.HasData(                          
            new List<User> {
                    new User{
                       Id =1,                       
                       Name = "GoedEtenAdmin", 
                       Username = "admin@goedetendenhaag.nl",
                       Role  = UserRole.SuperAdmin,
                       PasswordHash = passwordHash,
                       PasswordSalt = passwordSalt,
                       ResetCodeHash = resetCodeHash,
                       ResetCodeSalt = resetCodeSalt,
                       NeedsPasswordReset = false  
                    },new User{
                       Id =2,
                       Name = "Developers(don't delete)",
                       Username = "niels.gras.bee@outlook.com",
                       Role  = UserRole.SuperAdmin,
                       PasswordHash = passwordHash,
                       PasswordSalt = passwordSalt,
                       ResetCodeHash = resetCodeHash,
                       ResetCodeSalt = resetCodeSalt,
                       NeedsPasswordReset = false
                    }
               });
        }
        


    }
}
