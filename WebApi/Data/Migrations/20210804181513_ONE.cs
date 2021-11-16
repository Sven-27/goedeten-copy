using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data.Migrations
{
    public partial class ONE : Migration
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
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Details = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                    TransactionStatus = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    VatCategoryId = table.Column<int>(type: "int", nullable: false)
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
                    DeliveryId = table.Column<int>(type: "int", nullable: false),
                    DishId = table.Column<int>(type: "int", nullable: false),
                    OrderDeliveryId = table.Column<int>(type: "int", nullable: true)
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
                        onDelete: ReferentialAction.Restrict);
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
                values: new object[] { 1, "GoedEtenAdmin", false, new byte[] { 51, 248, 48, 20, 45, 54, 28, 147, 187, 111, 63, 64, 186, 117, 235, 57, 187, 32, 98, 79, 99, 156, 97, 159, 148, 184, 118, 158, 63, 54, 64, 230, 47, 194, 11, 145, 10, 166, 142, 216, 178, 232, 163, 90, 27, 127, 211, 25, 44, 3, 129, 13, 118, 253, 112, 170, 228, 180, 198, 51, 145, 187, 40, 11 }, new byte[] { 198, 190, 183, 146, 255, 130, 196, 15, 67, 5, 23, 46, 56, 61, 4, 63, 220, 237, 125, 247, 240, 47, 23, 171, 182, 153, 108, 146, 137, 224, 197, 7, 7, 5, 64, 5, 141, 2, 162, 227, 159, 224, 150, 68, 99, 46, 200, 79, 8, 236, 109, 99, 129, 141, 152, 244, 194, 15, 213, 3, 188, 249, 223, 145, 74, 70, 136, 31, 176, 110, 214, 98, 213, 173, 114, 108, 45, 60, 149, 50, 179, 190, 136, 243, 147, 57, 57, 194, 187, 174, 163, 104, 41, 176, 66, 46, 218, 243, 116, 182, 244, 126, 159, 200, 123, 90, 147, 201, 190, 137, 76, 233, 130, 62, 200, 25, 214, 82, 20, 164, 149, 246, 202, 121, 199, 108, 174, 27 }, new byte[] { 202, 64, 201, 112, 237, 117, 137, 138, 83, 45, 58, 206, 56, 43, 119, 35, 68, 71, 38, 32, 231, 152, 117, 156, 57, 93, 21, 62, 51, 15, 103, 51, 172, 126, 229, 33, 190, 190, 153, 70, 249, 72, 232, 255, 64, 210, 59, 145, 215, 106, 117, 49, 150, 225, 22, 252, 75, 222, 65, 180, 197, 191, 41, 190 }, new byte[] { 233, 70, 84, 121, 51, 221, 219, 211, 185, 120, 50, 116, 143, 34, 204, 122, 222, 183, 29, 250, 82, 125, 32, 12, 203, 144, 226, 254, 237, 178, 245, 7, 96, 200, 205, 93, 77, 95, 191, 37, 221, 227, 174, 123, 204, 236, 47, 24, 30, 62, 78, 56, 242, 90, 153, 152, 127, 78, 85, 115, 175, 253, 221, 113, 195, 122, 42, 118, 230, 161, 23, 10, 190, 136, 169, 149, 101, 229, 37, 161, 99, 249, 69, 35, 167, 97, 148, 254, 159, 154, 201, 212, 191, 210, 248, 84, 6, 30, 99, 194, 149, 202, 8, 90, 59, 86, 45, 158, 35, 131, 118, 39, 227, 47, 6, 76, 65, 139, 205, 184, 44, 9, 102, 34, 18, 210, 70, 22 }, 3, "admin@goedetendenhaag.nl" });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "VatCategory",
                columns: new[] { "Id", "Name", "Value" },
                values: new object[,]
                {
                    { 3, "ZERO", 0m },
                    { 4, "NONE", 0m },
                    { 1, "HIGH", 21m },
                    { 2, "LOW", 9m }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
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
                    { 207, true, "Amsterdam", "1092" },
                    { 199, true, "Amsterdam", "1084" },
                    { 208, true, "Amsterdam", "1093" },
                    { 217, true, "Rotterdam", "3003" },
                    { 210, true, "Amsterdam", "1095" },
                    { 191, true, "Amsterdam", "1076" },
                    { 225, true, "Rotterdam", "3011" },
                    { 224, true, "Rotterdam", "3010" },
                    { 223, true, "Rotterdam", "3009" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
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
                    { 160, true, "Amsterdam", "1045" },
                    { 188, true, "Amsterdam", "1073" },
                    { 168, true, "Amsterdam", "1053" },
                    { 167, true, "Amsterdam", "1052" },
                    { 166, true, "Amsterdam", "1051" },
                    { 165, true, "Amsterdam", "1050" },
                    { 164, true, "Amsterdam", "1049" },
                    { 163, true, "Amsterdam", "1048" },
                    { 162, true, "Amsterdam", "1047" },
                    { 161, true, "Amsterdam", "1046" },
                    { 226, true, "Rotterdam", "3012" },
                    { 159, true, "Amsterdam", "1044" },
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
                    { 181, true, "Amsterdam", "1066" },
                    { 180, true, "Amsterdam", "1065" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
                    { 179, true, "Amsterdam", "1064" },
                    { 178, true, "Amsterdam", "1063" },
                    { 177, true, "Amsterdam", "1062" },
                    { 176, true, "Amsterdam", "1061" },
                    { 175, true, "Amsterdam", "1060" },
                    { 174, true, "Amsterdam", "1059" },
                    { 173, true, "Amsterdam", "1058" },
                    { 171, true, "Amsterdam", "1056" },
                    { 227, true, "Rotterdam", "3013" },
                    { 257, true, "Rotterdam", "3043" },
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
                    { 291, true, "Rotterdam", "3077" },
                    { 290, true, "Rotterdam", "3076" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
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
                    { 258, true, "Rotterdam", "3044" },
                    { 153, true, "Amsterdam", "1038" },
                    { 256, true, "Rotterdam", "3042" },
                    { 255, true, "Rotterdam", "3041" },
                    { 254, true, "Rotterdam", "3040" },
                    { 253, true, "Rotterdam", "3039" },
                    { 252, true, "Rotterdam", "3038" },
                    { 251, true, "Rotterdam", "3037" },
                    { 250, true, "Rotterdam", "3036" },
                    { 249, true, "Rotterdam", "3035" },
                    { 247, true, "Rotterdam", "3033" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
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
                    { 35, true, "'s-Gravenhage", "2507" },
                    { 15, true, "'s-Gravenhage", "2288" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
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
                    { 127, true, "Amsterdam", "1012" },
                    { 126, true, "Amsterdam", "1011" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
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
                    { 84, true, "'s-Gravenhage", "2556" },
                    { 83, true, "'s-Gravenhage", "2555" }
                });

            migrationBuilder.InsertData(
                schema: "GoedEten",
                table: "ZipCode",
                columns: new[] { "Id", "Active", "LocationName", "Zip" },
                values: new object[,]
                {
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
                columns: new[] { "Id", "CookId", "CuisineId", "Description", "DishCategoryId", "Heating", "MaxQuantity", "Name", "P1", "P2", "P3", "P4", "P5", "Photo", "PriceLarge", "ShortName", "VatCategoryId" },
                values: new object[,]
                {
                    { 1, 1, 2, "Wokgerecht met brocoli, pompoen en kikkererwten ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 40, "The Souk", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgega22upbs5kr.png", 10m, "The Souk", 2 },
                    { 2, 2, 4, "Falafelburger met kikkererwten op een laagje van humus ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 24, "Vega burger", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedetendenhaag.nl/wp-content/uploads/2018/03/Wraps-soep-en-burgers-9-1-1.jpg", 5m, "Vega burger", 2 },
                    { 3, 3, 2, "Soep met pepers, kip en taugé, getopt met een half eitje ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 30, "Turmeric Power", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fger4lbsgyk3fp.png", 8m, "Turmeric Power", 2 },
                    { 4, 4, 4, "Burger met kaas en tomaat, met een salade van veldsla, paprika en pijnboompitjes ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 34, "Beef burger", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgevbrrosgpmpq.png", 5m, "Beef burger", 2 },
                    { 5, 5, 2, " ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten ", 20, "Jakarta", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgegc204gy2bhr.png", 5m, "Jakarta", 2 },
                    { 6, 6, 3, "Wrap met groentes en currykruiden ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 25, "Maaltijdwrap vega", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgexjoarfatwz4.png", 9m, "Wrap vega", 2 },
                    { 7, 6, 2, "", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 30, "Curry-no-curry", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgefxorvmah1ce.png", 19.50m, "Curry", 2 },
                    { 8, 7, 2, "Saoto soep is een heldere kippensoep uit de Javaanse keuken. Gemaakt van verse kruiden en geserveerd met gepluiste kip, gekookt ei, tauge, gebakken aardappel, vermicelli, knoflook en uien. Eventueel met witte rijst.", 2, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 50, "Saoto soup", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge2gkstyijwzr.png", 5m, "Saoto soup", 2 },
                    { 9, 3, 3, "Lekkere tortilla wraps gevuld met Mexicaans gekruide kip en paprika", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 30, "Maaltijdwrap kip", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge4eo1lfon53j.png", 3m, "Wrap kip", 2 },
                    { 10, 5, 2, " Umami: de hartige smaak naast zoet, zuur, zout en bitter.  ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 20, "Umami", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgehwykzk2hnnb.png", 3m, "Umami", 2 },
                    { 11, 6, 2, "It’s peanutty and noodley. It’s a friend to all vegetables. It’s salad that’s… not really a salad. ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 35, "Spicy peanut", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgeo3b024zwxiv.png", 3m, "Spicy peanut", 2 },
                    { 12, 1, 7, "Gemaakt van wilde zwarte rijst, wilde rode rijst en ronde zilvervliesrijst ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 24, "Risotto van drie soorten rijst met seizoensgroenten en oude kaas", "Alle verse ingrediënten (groenten, zuivel) die voor de risotto gebruikt worden worden komen uit de omgeving van Den Haag (>50km). Minimaal 75% van de droogwaren zijn biologisch geproduceerde grondstoffen uit Europa. ", "Alle verse ingrediënten (groenten, zuivel) die gebruikt worden zijn seizoensgebonden. Daarom kunnen de groenten en de bereiding ervan verschillen per seizoen", "", "", "", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fge11l21pejl0x.jpg", 12.50m, "Risotto", 2 },
                    { 13, 4, 5, "Eigengemaakte pastabladen met gestoofd rundvlees en bechamelsaus ", 1, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 20, "Lasagne", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgev30lyf0wotx.png", 3m, "Lasagne", 2 },
                    { 14, 3, 6, "Humus, baba hanoush, tabouleh en Yemenitische foel ", 2, "Opwarmen in magnetron op 500W 8 min. Opwarmen in hetelucht oven 200gr 20 minuten", 15, "Meze", "Verhaaltje over waarom Lokaal", "Verhaaltje over waarom Seizoensgebonden", "Verhaaltje over waarom Duurzaam voor je lijf", "Verhaaltje over waarom Van knol tot blaad", "Verhaaltje over waarom Plantaardige Eiwitten", "https://goedeten.blob.core.windows.net/goed-eten/dishes%2Fgeicvd2fcsmjc.jpg", 3m, "Meze", 2 }
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
