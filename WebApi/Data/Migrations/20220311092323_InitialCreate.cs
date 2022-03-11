using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "GoedEten");

            migrationBuilder.CreateTable(
                name: "Allergen",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Allergen", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cook",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(650)", maxLength: 650, nullable: true),
                    Motivation = table.Column<string>(type: "nvarchar(650)", maxLength: 650, nullable: true),
                    Specialization = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Photo = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Address = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    LocationName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cook", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cuisine",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cuisine", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Customer",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Zipcode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDeliveryRange = table.Column<bool>(type: "bit", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DishCategory",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DishCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Ingredient",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingredient", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Location",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Location", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderDate = table.Column<DateTime>(type: "DateTime2(0)", nullable: false),
                    NoVatPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    LowVatPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    HighVatPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TotalAmount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HouseNumber = table.Column<int>(type: "int", nullable: false),
                    AddHouseNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Zipcode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Dietdetails = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Username = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Role = table.Column<int>(type: "int", nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    ResetCodeHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    ResetCodeSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    NeedsPasswordReset = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VatCategory",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Value = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VatCategory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ZipCode",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Zip = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: false),
                    LocationName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: true, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZipCode", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ZipCodeRegistry",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Zip = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    Date = table.Column<DateTime>(type: "DateTime2(0)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZipCodeRegistry", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CookAvailability",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "Date", nullable: false),
                    CookId = table.Column<int>(type: "int", nullable: false),
                    Available = table.Column<bool>(type: "bit", nullable: false, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CookAvailability", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CookAvailability_Cook_CookId",
                        column: x => x.CookId,
                        principalSchema: "GoedEten",
                        principalTable: "Cook",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderDelivery",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DeliveryDate = table.Column<DateTime>(type: "DateTime2(0)", nullable: false),
                    DeliveryPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    TotalPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDelivery", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderDelivery_Order_OrderId",
                        column: x => x.OrderId,
                        principalSchema: "GoedEten",
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderTransaction",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderId = table.Column<int>(type: "int", nullable: false),
                    TransactionId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TransactionStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TransactionDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderTransaction", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderTransaction_Order_OrderId",
                        column: x => x.OrderId,
                        principalSchema: "GoedEten",
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Dish",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(80)", maxLength: 80, nullable: false),
                    ShortName = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Photo = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Heating = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    P1 = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    P2 = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    P3 = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    P4 = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    P5 = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    PriceLarge = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    MaxQuantity = table.Column<int>(type: "int", nullable: false),
                    CookId = table.Column<int>(type: "int", nullable: false),
                    CuisineId = table.Column<int>(type: "int", nullable: false),
                    DishCategoryId = table.Column<int>(type: "int", nullable: false),
                    VatCategoryId = table.Column<int>(type: "int", nullable: false),
                    AllIngredientsField = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dish", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Dish_Cook_CookId",
                        column: x => x.CookId,
                        principalSchema: "GoedEten",
                        principalTable: "Cook",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Dish_Cuisine_CuisineId",
                        column: x => x.CuisineId,
                        principalSchema: "GoedEten",
                        principalTable: "Cuisine",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Dish_DishCategory_DishCategoryId",
                        column: x => x.DishCategoryId,
                        principalSchema: "GoedEten",
                        principalTable: "DishCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Dish_VatCategory_VatCategoryId",
                        column: x => x.VatCategoryId,
                        principalSchema: "GoedEten",
                        principalTable: "VatCategory",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AllergenDish",
                schema: "GoedEten",
                columns: table => new
                {
                    AllergensId = table.Column<int>(type: "int", nullable: false),
                    DishesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AllergenDish", x => new { x.AllergensId, x.DishesId });
                    table.ForeignKey(
                        name: "FK_AllergenDish_Allergen_AllergensId",
                        column: x => x.AllergensId,
                        principalSchema: "GoedEten",
                        principalTable: "Allergen",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AllergenDish_Dish_DishesId",
                        column: x => x.DishesId,
                        principalSchema: "GoedEten",
                        principalTable: "Dish",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DishAvailability",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "DateTime2(0)", nullable: false),
                    CurrentQuantity = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    PlannedQuantity = table.Column<int>(type: "int", nullable: false),
                    DishId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DishAvailability", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DishAvailability_Dish_DishId",
                        column: x => x.DishId,
                        principalSchema: "GoedEten",
                        principalTable: "Dish",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DishIngredient",
                schema: "GoedEten",
                columns: table => new
                {
                    DishesId = table.Column<int>(type: "int", nullable: false),
                    IngredientsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DishIngredient", x => new { x.DishesId, x.IngredientsId });
                    table.ForeignKey(
                        name: "FK_DishIngredient_Dish_DishesId",
                        column: x => x.DishesId,
                        principalSchema: "GoedEten",
                        principalTable: "Dish",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DishIngredient_Ingredient_IngredientsId",
                        column: x => x.IngredientsId,
                        principalSchema: "GoedEten",
                        principalTable: "Ingredient",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderDish",
                schema: "GoedEten",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    OrderDeliveryId = table.Column<int>(type: "int", nullable: false),
                    DishAvailabilityId = table.Column<int>(type: "int", nullable: false),
                    DishId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDish", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderDish_Dish_DishId",
                        column: x => x.DishId,
                        principalSchema: "GoedEten",
                        principalTable: "Dish",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderDish_OrderDelivery_OrderDeliveryId",
                        column: x => x.OrderDeliveryId,
                        principalSchema: "GoedEten",
                        principalTable: "OrderDelivery",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "Allergen",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "noten" },
                    { 14, "vis" },
                    { 13, "lupine" },
                    { 12, "sulfiet" },
                    { 11, "sesamzaad" },
                    { 10, "mosterd" },
                    { 8, "weekdieren" },
                    { 9, "selderij" },
                    { 6, "melk" },
                    { 5, "soja" },
                    { 4, "pinda" },
                    { 3, "ei" },
                    { 2, "gluten" },
                    { 7, "schaaldieren" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "Cook",
                columns: new[] { "Id", "Active", "Address", "Description", "Email", "LocationName", "Motivation", "Name", "PhoneNumber", "Photo", "Specialization" },
                values: new object[,]
                {
                    { 5, true, "'s-Gravenhage", "Haagse lekkernijen", "liselotte@test.nl", "'s-Gravenhage", " motivatie...", "Liselotte", "012231314242", "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgef1vhh2tapxn.png", " specialiteit..." },
                    { 6, true, "'s-Gravenhage", "Indische roots", "yannikenanu@test.nl", "'s-Gravenhage", " motivatie...", "Yannik & Anu", "012231314242", "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgefozm3tpuwlx.png", " specialiteit..." },
                    { 4, true, "'s-Gravenhage", "Koreaanse smaak", "angela@test.nl", "'s-Gravenhage", " motivatie...", "Angela", "012231314242", "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgenfyjsdeinkc.png", " specialiteit..." },
                    { 7, true, "'s-Gravenhage", "Global cooking", "mark@test.nl", "'s-Gravenhage", " motivatie...", "Mark", "012231314242", "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fge01ibtkyeeu4.png", " specialiteit..." },
                    { 2, true, "'s-Gravenhage", "Peulvruchten koningin", "claudia@test.nl", "'s-Gravenhage", " motivatie...", "Claudia", "012231314242", "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgegmjfvezvefb.png", " specialiteit..." },
                    { 1, true, "'s-Gravenhage", "Hoi, mijn naam is Jitske. Ik ben 36 jaar en werk naast GoedEten bij de biologische winkel De Kruidentuin in de Bankastraat in Den Haag. Vanaf mijn begin twintiger jaren kreeg ik lastvan verschillende klachten, waardoor ik me ben gaan verdiepen in voeding en wat dit doet met mijn lichaam.Ik kwam er achter hoeveel voeding kan doen voor de gezondheid. Voor GoedEten laat ik mij deels inspireren door het seizoen en wat lokale producten ons te beiden hebben. Tevens gebruik ik veel traditionele Japanse ingrediënten in mijn gerechten om de beste combinatie te vinden tussen dichtbij en ver weg ", "jitske@test.nl", "'s-Gravenhage", "Ik sta helemaal achter de filosofie van GoedEten, waardoor het voor mij altijd weer een feest is om te koken voor mensen die duurzame en gezonde maaltijden kunnen waarderen. Mijn persoonlijke missie is om duurzaam en gezonde voeding toegankelijker te maken voor een breder publiek. Iedereen kent wel de rush van de week. Druk op werk, kinderen die aandacht vragen, sporten, sociale contacten en dan willen we ook nog gezond eten. Een snelle hap is dan wel eens makkelijk. Hoe fijn zou het zijn als er dan dagvers voor je gekookt wordt met heerlijke duurzame gerechten. Je maakt mij een blij mens als ik voor je mag koken.", "Jitske", "012231314242", "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgezbdxcwwhfs4.png", "Mijn specialiteit is om traditionele gerechten zó te maken dat ze ook geschikt zijn voor mensen met verschillende intoleranties en diëten, zonder concessies te doen aan smaak en kwaliteit. " },
                    { 3, true, "'s-Gravenhage", "Arabische eetcultuur", "elkie@test.nl", "'s-Gravenhage", " motivatie...", "Elkie", "012231314242", "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgegcolt3bfwkv.png", " specialiteit..." }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "Cuisine",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Egyptisch" },
                    { 2, "Indonesisch" },
                    { 3, "Mexicaans" },
                    { 4, "Hollands" },
                    { 5, "Italiaans" },
                    { 6, "Turks" },
                    { 7, "Mediterrane" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "DishCategory",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 5, "Leveranciers" },
                    { 4, "Lokaal Product" },
                    { 2, "Voor Gerecht" },
                    { 1, "Hoofd Gerecht" },
                    { 3, "Na Gerecht" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "Ingredient",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 12, "tijm" },
                    { 20, "doperwten" },
                    { 19, "rozemarijn" },
                    { 18, "rode rijst" },
                    { 17, "zwarte rijst" },
                    { 15, "knoflook" },
                    { 14, "olijfolie" },
                    { 13, "oregano" },
                    { 11, "pijnboompitten" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "Ingredient",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 16, "witte ui" },
                    { 9, "pijnboompitten" },
                    { 8, "zout" },
                    { 7, "witte peper" },
                    { 6, "oude kaas" },
                    { 5, "zongedroogde tomaat" },
                    { 10, "witte wijn (vegan)" },
                    { 4, "artisjokharten" },
                    { 3, "pompoenpitten" },
                    { 2, "zonnebloempitten" },
                    { 1, "ronde zilvervliesrijst" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "Location",
                columns: new[] { "Id", "Email", "Name" },
                values: new object[,]
                {
                    { 1, "msshubna@gmail.com", "'s-Gravenhage" },
                    { 2, "niels.gras.bee@outlook.com", "Rotterdam" },
                    { 3, "maryna.shubna.bee@outlook.com", "Amsterdam" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "User",
                columns: new[] { "Id", "Name", "NeedsPasswordReset", "PasswordHash", "PasswordSalt", "ResetCodeHash", "ResetCodeSalt", "Role", "Username" },
                values: new object[,]
                {
                    { 1, "GoedEtenAdmin", false, new byte[] { 62, 7, 179, 74, 121, 47, 194, 56, 159, 75, 120, 171, 40, 219, 21, 121, 65, 48, 173, 68, 75, 151, 200, 150, 30, 190, 185, 216, 33, 224, 93, 29, 100, 226, 4, 204, 6, 24, 182, 246, 159, 199, 59, 174, 169, 147, 69, 110, 227, 215, 190, 37, 94, 180, 142, 149, 169, 118, 180, 70, 27, 142, 212, 102 }, new byte[] { 245, 145, 48, 48, 35, 67, 186, 47, 160, 10, 184, 158, 241, 107, 5, 143, 96, 120, 148, 92, 227, 52, 71, 225, 222, 61, 229, 0, 193, 56, 183, 16, 197, 255, 180, 168, 47, 113, 176, 79, 239, 43, 139, 144, 5, 244, 78, 237, 3, 138, 125, 173, 80, 144, 51, 217, 67, 220, 252, 5, 40, 191, 191, 63, 19, 200, 52, 60, 103, 143, 187, 126, 201, 49, 153, 1, 117, 146, 8, 187, 45, 157, 28, 79, 13, 24, 19, 254, 86, 12, 34, 84, 154, 153, 214, 114, 8, 41, 9, 3, 61, 89, 215, 10, 16, 32, 161, 81, 198, 12, 252, 7, 18, 134, 96, 141, 174, 89, 20, 133, 177, 248, 22, 91, 57, 187, 225, 35 }, new byte[] { 191, 45, 234, 153, 28, 215, 95, 138, 71, 7, 173, 63, 210, 34, 73, 69, 238, 252, 140, 37, 52, 129, 131, 156, 144, 89, 106, 175, 90, 251, 246, 75, 212, 65, 102, 138, 46, 175, 19, 184, 180, 147, 167, 94, 81, 177, 209, 94, 153, 131, 64, 197, 243, 138, 7, 106, 161, 145, 26, 212, 191, 111, 230, 18 }, new byte[] { 174, 22, 100, 209, 192, 25, 7, 60, 42, 5, 20, 194, 98, 53, 234, 50, 17, 86, 165, 75, 0, 137, 25, 241, 66, 109, 123, 186, 146, 182, 182, 217, 173, 12, 37, 71, 43, 149, 165, 10, 175, 46, 74, 230, 123, 77, 225, 36, 91, 138, 232, 205, 17, 89, 159, 66, 80, 9, 213, 89, 236, 152, 228, 61, 193, 30, 205, 220, 230, 96, 0, 8, 36, 186, 243, 57, 115, 35, 34, 197, 237, 99, 110, 99, 54, 236, 221, 125, 83, 87, 223, 1, 112, 7, 135, 113, 48, 95, 103, 231, 140, 249, 117, 48, 210, 35, 216, 109, 8, 234, 47, 206, 81, 184, 191, 151, 58, 101, 134, 22, 141, 61, 236, 104, 5, 225, 166, 247 }, 3, "admin@goedetendenhaag.nl" },
                    { 2, "Developers(don't delete)", false, new byte[] { 62, 7, 179, 74, 121, 47, 194, 56, 159, 75, 120, 171, 40, 219, 21, 121, 65, 48, 173, 68, 75, 151, 200, 150, 30, 190, 185, 216, 33, 224, 93, 29, 100, 226, 4, 204, 6, 24, 182, 246, 159, 199, 59, 174, 169, 147, 69, 110, 227, 215, 190, 37, 94, 180, 142, 149, 169, 118, 180, 70, 27, 142, 212, 102 }, new byte[] { 245, 145, 48, 48, 35, 67, 186, 47, 160, 10, 184, 158, 241, 107, 5, 143, 96, 120, 148, 92, 227, 52, 71, 225, 222, 61, 229, 0, 193, 56, 183, 16, 197, 255, 180, 168, 47, 113, 176, 79, 239, 43, 139, 144, 5, 244, 78, 237, 3, 138, 125, 173, 80, 144, 51, 217, 67, 220, 252, 5, 40, 191, 191, 63, 19, 200, 52, 60, 103, 143, 187, 126, 201, 49, 153, 1, 117, 146, 8, 187, 45, 157, 28, 79, 13, 24, 19, 254, 86, 12, 34, 84, 154, 153, 214, 114, 8, 41, 9, 3, 61, 89, 215, 10, 16, 32, 161, 81, 198, 12, 252, 7, 18, 134, 96, 141, 174, 89, 20, 133, 177, 248, 22, 91, 57, 187, 225, 35 }, new byte[] { 191, 45, 234, 153, 28, 215, 95, 138, 71, 7, 173, 63, 210, 34, 73, 69, 238, 252, 140, 37, 52, 129, 131, 156, 144, 89, 106, 175, 90, 251, 246, 75, 212, 65, 102, 138, 46, 175, 19, 184, 180, 147, 167, 94, 81, 177, 209, 94, 153, 131, 64, 197, 243, 138, 7, 106, 161, 145, 26, 212, 191, 111, 230, 18 }, new byte[] { 174, 22, 100, 209, 192, 25, 7, 60, 42, 5, 20, 194, 98, 53, 234, 50, 17, 86, 165, 75, 0, 137, 25, 241, 66, 109, 123, 186, 146, 182, 182, 217, 173, 12, 37, 71, 43, 149, 165, 10, 175, 46, 74, 230, 123, 77, 225, 36, 91, 138, 232, 205, 17, 89, 159, 66, 80, 9, 213, 89, 236, 152, 228, 61, 193, 30, 205, 220, 230, 96, 0, 8, 36, 186, 243, 57, 115, 35, 34, 197, 237, 99, 110, 99, 54, 236, 221, 125, 83, 87, 223, 1, 112, 7, 135, 113, 48, 95, 103, 231, 140, 249, 117, 48, 210, 35, 216, 109, 8, 234, 47, 206, 81, 184, 191, 151, 58, 101, 134, 22, 141, 61, 236, 104, 5, 225, 166, 247 }, 3, "niels.gras.bee@outlook.com" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "VatCategory",
                columns: new[] { "Id", "Name", "Value" },
                values: new object[,]
                {
                    { 4, "NONE", 0m },
                    { 3, "ZERO", 0m },
                    { 1, "HIGH", 21m },
                    { 2, "LOW", 9m }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 207, true, "Amsterdam", "1092" },
                    { 206, true, "Amsterdam", "1091" },
                    { 205, true, "Amsterdam", "1090" },
                    { 204, true, "Amsterdam", "1089" },
                    { 203, true, "Amsterdam", "1088" },
                    { 202, true, "Amsterdam", "1087" },
                    { 201, true, "Amsterdam", "1086" },
                    { 192, true, "Amsterdam", "1077" },
                    { 200, true, "Amsterdam", "1085" },
                    { 198, true, "Amsterdam", "1083" },
                    { 197, true, "Amsterdam", "1082" },
                    { 196, true, "Amsterdam", "1081" },
                    { 195, true, "Amsterdam", "1080" },
                    { 194, true, "Amsterdam", "1079" },
                    { 193, true, "Amsterdam", "1078" },
                    { 199, true, "Amsterdam", "1084" },
                    { 208, true, "Amsterdam", "1093" },
                    { 217, true, "Rotterdam", "3003" },
                    { 210, true, "Amsterdam", "1095" },
                    { 191, true, "Amsterdam", "1076" },
                    { 225, true, "Rotterdam", "3011" },
                    { 224, true, "Rotterdam", "3010" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 223, true, "Rotterdam", "3009" },
                    { 222, true, "Rotterdam", "3008" },
                    { 221, true, "Rotterdam", "3007" },
                    { 220, true, "Rotterdam", "3006" },
                    { 219, true, "Rotterdam", "3005" },
                    { 218, true, "Rotterdam", "3004" },
                    { 216, true, "Rotterdam", "3002" },
                    { 215, true, "Rotterdam", "3001" },
                    { 214, true, "Rotterdam", "3000" },
                    { 213, true, "Amsterdam", "1098" },
                    { 212, true, "Amsterdam", "1097" },
                    { 211, true, "Amsterdam", "1096" },
                    { 209, true, "Amsterdam", "1094" },
                    { 190, true, "Amsterdam", "1075" },
                    { 159, true, "Amsterdam", "1044" },
                    { 188, true, "Amsterdam", "1073" },
                    { 168, true, "Amsterdam", "1053" },
                    { 167, true, "Amsterdam", "1052" },
                    { 166, true, "Amsterdam", "1051" },
                    { 165, true, "Amsterdam", "1050" },
                    { 164, true, "Amsterdam", "1049" },
                    { 163, true, "Amsterdam", "1048" },
                    { 162, true, "Amsterdam", "1047" },
                    { 161, true, "Amsterdam", "1046" },
                    { 160, true, "Amsterdam", "1045" },
                    { 226, true, "Rotterdam", "3012" },
                    { 158, true, "Amsterdam", "1043" },
                    { 157, true, "Amsterdam", "1042" },
                    { 156, true, "Amsterdam", "1041" },
                    { 155, true, "Amsterdam", "1040" },
                    { 154, true, "Amsterdam", "1039" },
                    { 169, true, "Amsterdam", "1054" },
                    { 189, true, "Amsterdam", "1074" },
                    { 170, true, "Amsterdam", "1055" },
                    { 172, true, "Amsterdam", "1057" },
                    { 187, true, "Amsterdam", "1072" },
                    { 186, true, "Amsterdam", "1071" },
                    { 185, true, "Amsterdam", "1070" },
                    { 184, true, "Amsterdam", "1069" },
                    { 183, true, "Amsterdam", "1068" },
                    { 182, true, "Amsterdam", "1067" },
                    { 181, true, "Amsterdam", "1066" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 180, true, "Amsterdam", "1065" },
                    { 179, true, "Amsterdam", "1064" },
                    { 178, true, "Amsterdam", "1063" },
                    { 177, true, "Amsterdam", "1062" },
                    { 176, true, "Amsterdam", "1061" },
                    { 175, true, "Amsterdam", "1060" },
                    { 174, true, "Amsterdam", "1059" },
                    { 173, true, "Amsterdam", "1058" },
                    { 171, true, "Amsterdam", "1056" },
                    { 227, true, "Rotterdam", "3013" },
                    { 258, true, "Rotterdam", "3044" },
                    { 229, true, "Rotterdam", "3015" },
                    { 282, true, "Rotterdam", "3068" },
                    { 281, true, "Rotterdam", "3067" },
                    { 280, true, "Rotterdam", "3066" },
                    { 279, true, "Rotterdam", "3065" },
                    { 278, true, "Rotterdam", "3064" },
                    { 277, true, "Rotterdam", "3063" },
                    { 276, true, "Rotterdam", "3062" },
                    { 275, true, "Rotterdam", "3061" },
                    { 274, true, "Rotterdam", "3060" },
                    { 273, true, "Rotterdam", "3059" },
                    { 272, true, "Rotterdam", "3058" },
                    { 271, true, "Rotterdam", "3057" },
                    { 270, true, "Rotterdam", "3056" },
                    { 269, true, "Rotterdam", "3055" },
                    { 268, true, "Rotterdam", "3054" },
                    { 283, true, "Rotterdam", "3069" },
                    { 267, true, "Rotterdam", "3053" },
                    { 284, true, "Rotterdam", "3070" },
                    { 286, true, "Rotterdam", "3072" },
                    { 301, true, "Rotterdam", "3087" },
                    { 300, true, "Rotterdam", "3086" },
                    { 299, true, "Rotterdam", "3085" },
                    { 298, true, "Rotterdam", "3084" },
                    { 297, true, "Rotterdam", "3083" },
                    { 296, true, "Rotterdam", "3082" },
                    { 295, true, "Rotterdam", "3081" },
                    { 294, true, "Rotterdam", "3080" },
                    { 293, true, "Rotterdam", "3079" },
                    { 292, true, "Rotterdam", "3078" },
                    { 291, true, "Rotterdam", "3077" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 290, true, "Rotterdam", "3076" },
                    { 289, true, "Rotterdam", "3075" },
                    { 288, true, "Rotterdam", "3074" },
                    { 287, true, "Rotterdam", "3073" },
                    { 285, true, "Rotterdam", "3071" },
                    { 228, true, "Rotterdam", "3014" },
                    { 266, true, "Rotterdam", "3052" },
                    { 264, true, "Rotterdam", "3050" },
                    { 244, true, "Rotterdam", "3030" },
                    { 243, true, "Rotterdam", "3029" },
                    { 242, true, "Rotterdam", "3028" },
                    { 241, true, "Rotterdam", "3027" },
                    { 240, true, "Rotterdam", "3026" },
                    { 239, true, "Rotterdam", "3025" },
                    { 238, true, "Rotterdam", "3024" },
                    { 237, true, "Rotterdam", "3023" },
                    { 236, true, "Rotterdam", "3022" },
                    { 235, true, "Rotterdam", "3021" },
                    { 234, true, "Rotterdam", "3020" },
                    { 233, true, "Rotterdam", "3019" },
                    { 232, true, "Rotterdam", "3018" },
                    { 231, true, "Rotterdam", "3017" },
                    { 230, true, "Rotterdam", "3016" },
                    { 245, true, "Rotterdam", "3031" },
                    { 265, true, "Rotterdam", "3051" },
                    { 246, true, "Rotterdam", "3032" },
                    { 248, true, "Rotterdam", "3034" },
                    { 263, true, "Rotterdam", "3049" },
                    { 262, true, "Rotterdam", "3048" },
                    { 261, true, "Rotterdam", "3047" },
                    { 260, true, "Rotterdam", "3046" },
                    { 259, true, "Rotterdam", "3045" },
                    { 153, true, "Amsterdam", "1038" },
                    { 257, true, "Rotterdam", "3043" },
                    { 256, true, "Rotterdam", "3042" },
                    { 255, true, "Rotterdam", "3041" },
                    { 254, true, "Rotterdam", "3040" },
                    { 253, true, "Rotterdam", "3039" },
                    { 252, true, "Rotterdam", "3038" },
                    { 251, true, "Rotterdam", "3037" },
                    { 250, true, "Rotterdam", "3036" },
                    { 249, true, "Rotterdam", "3035" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 247, true, "Rotterdam", "3033" },
                    { 152, true, "Amsterdam", "1037" },
                    { 121, true, "'s-Gravenhage", "2593" },
                    { 150, true, "Amsterdam", "1035" },
                    { 53, true, "'s-Gravenhage", "2525" },
                    { 52, true, "'s-Gravenhage", "2524" },
                    { 51, true, "'s-Gravenhage", "2523" },
                    { 50, true, "'s-Gravenhage", "2522" },
                    { 49, true, "'s-Gravenhage", "2521" },
                    { 48, true, "'s-Gravenhage", "2520" },
                    { 47, true, "'s-Gravenhage", "2519" },
                    { 46, true, "'s-Gravenhage", "2518" },
                    { 45, true, "'s-Gravenhage", "2517" },
                    { 44, true, "'s-Gravenhage", "2516" },
                    { 43, true, "'s-Gravenhage", "2515" },
                    { 42, true, "'s-Gravenhage", "2514" },
                    { 41, true, "'s-Gravenhage", "2513" },
                    { 40, true, "'s-Gravenhage", "2512" },
                    { 39, true, "'s-Gravenhage", "2511" },
                    { 54, true, "'s-Gravenhage", "2526" },
                    { 38, true, "'s-Gravenhage", "2510" },
                    { 55, true, "'s-Gravenhage", "2527" },
                    { 57, true, "'s-Gravenhage", "2529" },
                    { 72, true, "'s-Gravenhage", "2544" },
                    { 71, true, "'s-Gravenhage", "2543" },
                    { 70, true, "'s-Gravenhage", "2542" },
                    { 69, true, "'s-Gravenhage", "2541" },
                    { 68, true, "'s-Gravenhage", "2540" },
                    { 67, true, "'s-Gravenhage", "2539" },
                    { 66, true, "'s-Gravenhage", "2538" },
                    { 65, true, "'s-Gravenhage", "2537" },
                    { 64, true, "'s-Gravenhage", "2536" },
                    { 63, true, "'s-Gravenhage", "2535" },
                    { 62, true, "'s-Gravenhage", "2534" },
                    { 61, true, "'s-Gravenhage", "2533" },
                    { 60, true, "'s-Gravenhage", "2532" },
                    { 59, true, "'s-Gravenhage", "2531" },
                    { 58, true, "'s-Gravenhage", "2530" },
                    { 56, true, "'s-Gravenhage", "2528" },
                    { 73, true, "'s-Gravenhage", "2545" },
                    { 37, true, "'s-Gravenhage", "2509" },
                    { 35, true, "'s-Gravenhage", "2507" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 15, true, "'s-Gravenhage", "2288" },
                    { 14, true, "'s-Gravenhage", "2287" },
                    { 13, true, "'s-Gravenhage", "2286" },
                    { 12, true, "'s-Gravenhage", "2285" },
                    { 11, true, "'s-Gravenhage", "2284" },
                    { 10, true, "'s-Gravenhage", "2283" },
                    { 9, true, "'s-Gravenhage", "2282" },
                    { 8, true, "'s-Gravenhage", "2281" },
                    { 7, true, "'s-Gravenhage", "2280" },
                    { 6, true, "'s-Gravenhage", "2275" },
                    { 5, true, "'s-Gravenhage", "2274" },
                    { 4, true, "'s-Gravenhage", "2273" },
                    { 3, true, "'s-Gravenhage", "2272" },
                    { 2, true, "'s-Gravenhage", "2271" },
                    { 1, true, "'s-Gravenhage", "2270" },
                    { 16, true, "'s-Gravenhage", "2289" },
                    { 36, true, "'s-Gravenhage", "2508" },
                    { 17, true, "'s-Gravenhage", "2290" },
                    { 19, true, "'s-Gravenhage", "2491" },
                    { 34, true, "'s-Gravenhage", "2506" },
                    { 33, true, "'s-Gravenhage", "2505" },
                    { 32, true, "'s-Gravenhage", "2504" },
                    { 31, true, "'s-Gravenhage", "2503" },
                    { 30, true, "'s-Gravenhage", "2502" },
                    { 29, true, "'s-Gravenhage", "2501" },
                    { 28, true, "'s-Gravenhage", "2500" },
                    { 27, true, "'s-Gravenhage", "2499" },
                    { 26, true, "'s-Gravenhage", "2498" },
                    { 25, true, "'s-Gravenhage", "2497" },
                    { 24, true, "'s-Gravenhage", "2496" },
                    { 23, true, "'s-Gravenhage", "2495" },
                    { 22, true, "'s-Gravenhage", "2494" },
                    { 21, true, "'s-Gravenhage", "2493" },
                    { 20, true, "'s-Gravenhage", "2492" },
                    { 18, true, "'s-Gravenhage", "2490" },
                    { 74, true, "'s-Gravenhage", "2546" },
                    { 75, true, "'s-Gravenhage", "2547" },
                    { 76, true, "'s-Gravenhage", "2548" },
                    { 130, true, "Amsterdam", "1015" },
                    { 129, true, "Amsterdam", "1014" },
                    { 128, true, "Amsterdam", "1013" },
                    { 127, true, "Amsterdam", "1012" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 126, true, "Amsterdam", "1011" },
                    { 125, true, "'s-Gravenhage", "2597" },
                    { 124, true, "'s-Gravenhage", "2596" },
                    { 123, true, "'s-Gravenhage", "2595" },
                    { 122, true, "'s-Gravenhage", "2594" },
                    { 302, true, "Rotterdam", "3088" },
                    { 120, true, "'s-Gravenhage", "2592" },
                    { 119, true, "'s-Gravenhage", "2591" },
                    { 118, true, "'s-Gravenhage", "2590" },
                    { 117, true, "'s-Gravenhage", "2589" },
                    { 116, true, "'s-Gravenhage", "2588" },
                    { 131, true, "Amsterdam", "1016" },
                    { 115, true, "'s-Gravenhage", "2587" },
                    { 132, true, "Amsterdam", "1017" },
                    { 134, true, "Amsterdam", "1019" },
                    { 149, true, "Amsterdam", "1034" },
                    { 148, true, "Amsterdam", "1033" },
                    { 147, true, "Amsterdam", "1032" },
                    { 146, true, "Amsterdam", "1031" },
                    { 145, true, "Amsterdam", "1030" },
                    { 144, true, "Amsterdam", "1029" },
                    { 143, true, "Amsterdam", "1028" },
                    { 142, true, "Amsterdam", "1027" },
                    { 141, true, "Amsterdam", "1026" },
                    { 140, true, "Amsterdam", "1025" },
                    { 139, true, "Amsterdam", "1024" },
                    { 138, true, "Amsterdam", "1023" },
                    { 137, true, "Amsterdam", "1022" },
                    { 136, true, "Amsterdam", "1021" },
                    { 135, true, "Amsterdam", "1020" },
                    { 133, true, "Amsterdam", "1018" },
                    { 114, true, "'s-Gravenhage", "2586" },
                    { 113, true, "'s-Gravenhage", "2585" },
                    { 112, true, "'s-Gravenhage", "2584" },
                    { 91, true, "'s-Gravenhage", "2563" },
                    { 90, true, "'s-Gravenhage", "2562" },
                    { 89, true, "'s-Gravenhage", "2561" },
                    { 88, true, "'s-Gravenhage", "2560" },
                    { 87, true, "'s-Gravenhage", "2559" },
                    { 86, true, "'s-Gravenhage", "2558" },
                    { 85, true, "'s-Gravenhage", "2557" },
                    { 84, true, "'s-Gravenhage", "2556" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 83, true, "'s-Gravenhage", "2555" },
                    { 82, true, "'s-Gravenhage", "2554" },
                    { 81, true, "'s-Gravenhage", "2553" },
                    { 80, true, "'s-Gravenhage", "2552" },
                    { 79, true, "'s-Gravenhage", "2551" },
                    { 78, true, "'s-Gravenhage", "2550" },
                    { 77, true, "'s-Gravenhage", "2549" },
                    { 92, true, "'s-Gravenhage", "2564" },
                    { 93, true, "'s-Gravenhage", "2565" },
                    { 94, true, "'s-Gravenhage", "2566" },
                    { 95, true, "'s-Gravenhage", "2567" },
                    { 111, true, "'s-Gravenhage", "2583" },
                    { 110, true, "'s-Gravenhage", "2582" },
                    { 109, true, "'s-Gravenhage", "2581" },
                    { 108, true, "'s-Gravenhage", "2580" },
                    { 107, true, "'s-Gravenhage", "2579" },
                    { 106, true, "'s-Gravenhage", "2578" },
                    { 105, true, "'s-Gravenhage", "2577" },
                    { 151, true, "Amsterdam", "1036" },
                    { 104, true, "'s-Gravenhage", "2576" },
                    { 102, true, "'s-Gravenhage", "2574" },
                    { 101, true, "'s-Gravenhage", "2573" },
                    { 100, true, "'s-Gravenhage", "2572" },
                    { 99, true, "'s-Gravenhage", "2571" },
                    { 98, true, "'s-Gravenhage", "2570" },
                    { 97, true, "'s-Gravenhage", "2569" },
                    { 96, true, "'s-Gravenhage", "2568" },
                    { 103, true, "'s-Gravenhage", "2575" },
                    { 303, true, "Rotterdam", "3089" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "Dish",
                columns: new[] { "Id", "AllIngredientsField", "CookId", "CuisineId", "Description", "DishCategoryId", "Heating", "MaxQuantity", "Name", "P1", "P2", "P3", "P4", "P5", "Photo", "PriceLarge", "ShortName", "VatCategoryId" },
                values: new object[,]
                {
                    { 1, null, 1, 2, "Wokgerecht met brocoli, pompoen en kikkererwten ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 40, "The Souk", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgega22upbs5kr.png", 10m, "The Souk", 2 },
                    { 2, null, 2, 4, "Falafelburger met kikkererwten op een laagje van humus ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 24, "Vega burger", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedetendenhaag.nl/wp-content/uploads/2018/03/Wraps-soep-en-burgers-9-1-1.jpg", 5m, "Vega burger", 2 },
                    { 3, null, 3, 2, "Soep met pepers, kip en taugé, getopt met een half eitje ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 30, "Turmeric Power", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fger4lbsgyk3fp.png", 8m, "Turmeric Power", 2 },
                    { 4, null, 4, 4, "Burger met kaas en tomaat, met een salade van veldsla, paprika en pijnboompitjes ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 34, "Beef burger", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgevbrrosgpmpq.png", 5m, "Beef burger", 2 },
                    { 5, null, 5, 2, " ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten ", 20, "Jakarta", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgegc204gy2bhr.png", 5m, "Jakarta", 2 },
                    { 6, null, 6, 3, "Wrap met groentes en currykruiden ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 25, "Maaltijdwrap vega", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgexjoarfatwz4.png", 9m, "Wrap vega", 2 },
                    { 7, null, 6, 2, "", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 30, "Curry-no-curry", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgefxorvmah1ce.png", 19.50m, "Curry", 2 },
                    { 8, null, 7, 2, "Saoto soep is een heldere kippensoep uit de Javaanse keuken. Gemaakt van verse kruiden en geserveerd met gepluiste kip, gekookt ei, tauge, gebakken aardappel, vermicelli, knoflook en uien. Eventueel met witte rijst.", 2, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 50, "Saoto soup", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge2gkstyijwzr.png", 5m, "Saoto soup", 2 },
                    { 9, null, 3, 3, "Lekkere tortilla wraps gevuld met Mexicaans gekruide kip en paprika", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 30, "Maaltijdwrap kip", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge4eo1lfon53j.png", 3m, "Wrap kip", 2 },
                    { 10, null, 5, 2, " Umami: de hartige smaak naast zoet, zuur, zout en bitter.  ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 20, "Umami", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgehwykzk2hnnb.png", 3m, "Umami", 2 },
                    { 11, null, 6, 2, "It’s peanutty and noodley. It’s a friend to all vegetables. It’s salad that’s… not really a salad. ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 35, "Spicy peanut", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgeo3b024zwxiv.png", 3m, "Spicy peanut", 2 },
                    { 12, null, 1, 7, "Gemaakt van wilde zwarte rijst, wilde rode rijst en ronde zilvervliesrijst ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 24, "Risotto van drie soorten rijst met seizoensgroenten en oude kaas", "Alle verse ingrediënten (groenten, zuivel) die voor de risotto gebruikt worden worden komen uit de omgeving van Den Haag (>50km). Minimaal 75% van de droogwaren zijn biologisch geproduceerde grondstoffen uit Europa. ", "Alle verse ingrediënten (groenten, zuivel) die gebruikt worden zijn seizoensgebonden. Daarom kunnen de groenten en de bereiding ervan verschillen per seizoen", "", "", "", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge11l21pejl0x.jpg", 12.50m, "Risotto", 2 },
                    { 13, null, 4, 5, "Eigengemaakte pastabladen met gestoofd rundvlees en bechamelsaus ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 20, "Lasagne", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgev30lyf0wotx.png", 3m, "Lasagne", 2 },
                    { 14, null, 3, 6, "Humus, baba hanoush, tabouleh en Yemenitische foel ", 2, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 15, "Meze", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgeicvd2fcsmjc.jpg", 3m, "Meze", 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AllergenDish_DishesId",
                schema: "GoedEten",
                table: "AllergenDish",
                column: "DishesId");

            migrationBuilder.CreateIndex(
                name: "IX_CookAvailability_CookId",
                schema: "GoedEten",
                table: "CookAvailability",
                column: "CookId");

            migrationBuilder.CreateIndex(
                name: "IX_Dish_CookId",
                schema: "GoedEten",
                table: "Dish",
                column: "CookId");

            migrationBuilder.CreateIndex(
                name: "IX_Dish_CuisineId",
                schema: "GoedEten",
                table: "Dish",
                column: "CuisineId");

            migrationBuilder.CreateIndex(
                name: "IX_Dish_DishCategoryId",
                schema: "GoedEten",
                table: "Dish",
                column: "DishCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Dish_VatCategoryId",
                schema: "GoedEten",
                table: "Dish",
                column: "VatCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_DishAvailability_DishId",
                schema: "GoedEten",
                table: "DishAvailability",
                column: "DishId");

            migrationBuilder.CreateIndex(
                name: "IX_DishIngredient_IngredientsId",
                schema: "GoedEten",
                table: "DishIngredient",
                column: "IngredientsId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDelivery_OrderId",
                schema: "GoedEten",
                table: "OrderDelivery",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDish_DishId",
                schema: "GoedEten",
                table: "OrderDish",
                column: "DishId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDish_OrderDeliveryId",
                schema: "GoedEten",
                table: "OrderDish",
                column: "OrderDeliveryId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderTransaction_OrderId",
                schema: "GoedEten",
                table: "OrderTransaction",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AllergenDish",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "CookAvailability",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Customer",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "DishAvailability",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "DishIngredient",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Location",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "OrderDish",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "OrderTransaction",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "User",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "ZipCode",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "ZipCodeRegistry",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Allergen",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Ingredient",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Dish",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "OrderDelivery",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Cook",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Cuisine",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "DishCategory",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "VatCategory",
                schema: "GoedEten");

            migrationBuilder.DropTable(
                name: "Order",
                schema: "GoedEten");
        }
    }
}
