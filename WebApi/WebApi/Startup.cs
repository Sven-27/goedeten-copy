using System;
using System.IO;
using System.Text;
using Azure.Storage.Blobs;
using CrossCuttingConcerns.Settings;
using Data.Repositories;
using DataLayer;
using Logic.Mapping;
using Logic.Services;
using Logic.Services.Jobs;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Quartz;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            //services.AddCors(options =>
            //{
            //    options.AddPolicy(
            //        "CorsPolicy",
            //        builder => builder.WithOrigins("http://localhost:3000/", "https://localhost:3000/")
            //            .AllowAnyMethod()
            //            .AllowAnyHeader()
            //            .AllowCredentials());
            //});

            services.AddElmahIo(o =>
            {
                o.ApiKey = "daf4a2960824433d8b556edba7b6dd3d";
                o.LogId = new Guid("eab7f31e-9620-4ac7-ab65-8fe0f462a173");
            });

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder =>
                    {
                        builder.SetIsOriginAllowed(_ => true)
                            // .SetIsOriginAllowedToAllowWildcardSubdomains()
                            //  .WithOrigins("http://localhost:3000/", "https://localhost:3000/")
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials();
                    });
            });

            // configure strongly typed settings objects

            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);
            var dbConnectionString = Configuration.GetSection("DatabaseConnectionString").Value;

            var config = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(config.Secret);

            services.AddSwaggerGen(s =>
            {
                s.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "WebApi",
                    Version = "v1"

                });

                // To Enable authorization using Swagger (JWT)    
                s.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    //Type = SecuritySchemeType.ApiKey,
                    Type = SecuritySchemeType.Http,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Enter your ONLY valid token in the text input below.\r\n\r\n",
                });
                s.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        Array.Empty<string>()

                    }
                });
            });

            // Adding Authentication  
            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                // Adding Jwt Bearer  
                .AddJwtBearer(options =>
                {
                    options.SaveToken = true;
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                }            
                )
                .AddCookie();
            

            services.AddDbContext<MainDbContext>(options =>
            {
                options.UseSqlServer(dbConnectionString,
                    sqlOptions =>
                    {
                        sqlOptions.EnableRetryOnFailure(
                            10,
                            TimeSpan.FromSeconds(30),
                            null);
                        sqlOptions.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery);
                        
                    }).EnableSensitiveDataLogging();
            });

            // Repositories
            
            services.AddScoped<ICookRepository, CookRepository>();
            services.AddScoped<ICookAvailabilityRepository, CookAvailabilityRepository>();
            services.AddScoped<IDishRepository, DishRepository>();
            services.AddScoped<IDishAvailabilityRepository, DishAvailabilityRepository>();
            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<IZipCodeRepository,ZipCodeRepository>();
            services.AddScoped<IZipCodeRegistryRepository, ZipCodeRegistryRepository>();
            services.AddScoped<IIngredientRepository, IngredientRepository>();
            services.AddScoped<IAllergenRepository, AllergenRepository>();
            services.AddScoped<ICuisineRepository, CuisineRepository>();
            services.AddScoped<IDishCategoryRepository, DishCategoryRepository>();
            services.AddScoped<ILocationRepository, LocationRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IVatCategoryRepository, VatCategoryRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IOrderDeliveryRepository, OrderDeliveryRepository>();
            services.AddScoped<IOrderDishRepository, OrderDishRepository>();
            services.AddScoped<IOrderTransactionRepository, OrderTransactionRepository>();



            // Services
            services.AddScoped<ICookService, CookService>();
            services.AddScoped<ICookAvailabilityService, CookAvailabilityService>();
            services.AddScoped<IDishService, DishService>();
            services.AddScoped<IDishAvailabilityService, DishAvailabilityService>();
            services.AddScoped<ICustomerService, CustomerService>();          
            services.AddScoped<IZipCodeService, ZipCodeService>();
            services.AddScoped<IIngredientService, IngredientService>();
            services.AddScoped<IAllergenService, AllergenService>();
            services.AddScoped<ICuisineService, CuisineService>();            
            services.AddScoped<IZipCodeRegistryService, ZipCodeRegistryService>();
            services.AddScoped<IDishCategoryService, DishCategoryService>();
            services.AddScoped<ILocationService, LocationService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IOmniKassaService, OmniKassaService>();
            services.AddScoped<IVatCategoryService,VatCategoryService>();
            services.AddScoped<IOrderService, OrderService>();

            services.AddQuartz(q =>
            {
                // base quartz scheduler, job and trigger configuration
                q.UseMicrosoftDependencyInjectionScopedJobFactory();
                // Create a "key" for the job
                var jobKey = new JobKey("JobDishOverview");
               // var jobKey1 = new JobKey("ChangeProfileExpiredJob");
                // Register the job with the DI container
                q.AddJob<JobDishOverview>(opts => opts.WithIdentity(jobKey));
              //  q.AddJob<ChangeProfileExpiredJob>(opts => opts.WithIdentity(jobKey1));
                // Create a trigger for the job
              q.AddTrigger(opts => opts
                    .ForJob(jobKey) // link to the CompetenceUsedJob
                    .WithIdentity("JobDishOverview-Trigger") // give the trigger a unique name                                                               
                    .WithCronSchedule("0 15 11 1/1 * ? *", cron => { cron.InTimeZone(TimeZoneInfo.FindSystemTimeZoneById("W. Europe Standard Time")); }));
                    // run every day at 11:15 am

            //    q.AddTrigger(opts => opts
            //        .ForJob(jobKey1)
            //        .WithIdentity("ChangeProfileExpiredJob-Trigger")
            //        //.WithCronSchedule("0/5 * * * * ?")); // run everyday at 02:00am
            //        .WithCronSchedule("0 0 2 1/1 * ? *")); // run everyday at 02:00am


            });
            // ASP.NET Core hosting
            services.AddQuartzServer(options =>
            {
                // when shutting down we want jobs to complete gracefully
                options.WaitForJobsToComplete = true;
            });



            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddTransient<IMailKitService, MailKitService>();
            services.Configure<MailKitEmailSenderOptions>(options =>
            {
                options.HostAddress = Configuration["ExternalProviders:MailKit:SMTP:Address"];
                options.HostPort = Convert.ToInt32(Configuration["ExternalProviders:MailKit:SMTP:Port"]);
                options.HostUsername = Configuration["ExternalProviders:MailKit:SMTP:Account"];
                options.HostPassword = Configuration["ExternalProviders:MailKit:SMTP:Password"];
                options.SenderEMail = Configuration["ExternalProviders:MailKit:SMTP:SenderEmail"];
                options.SenderName = Configuration["ExternalProviders:MailKit:SMTP:SenderName"];
            });      

            // Blob Storage
            services.AddScoped(_ => {
                return new BlobServiceClient(Configuration.GetConnectionString("AzureBlobStorage"));
            });
            services.AddScoped<IFileManagerLogic, FileManagerLogic>();
            
            // Automapper configuration
            services.AddAutoMapper(typeof(MappingProfile).Assembly);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //if (env.IsDevelopment())
            //{
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebApi v1"));
            //}

            app.UseCors("CorsPolicy");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }

    public class DesignTimeMainDbContext : IDesignTimeDbContextFactory<MainDbContext>
    {
        MainDbContext IDesignTimeDbContextFactory<MainDbContext>.CreateDbContext(string[] args)
        {
#if DEBUG
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.Development.json")
                .Build();
#else
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
#endif


            var builder = new DbContextOptionsBuilder<MainDbContext>();
            var connectionString = configuration.GetSection("DatabaseConnectionString").Value;
            
            builder.UseSqlServer(connectionString);

            return new MainDbContext(builder.Options);
        }
    }
}