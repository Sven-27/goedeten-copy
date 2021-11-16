using Data.DataObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Data.Configurations
{
    public class CookConfiguration : IEntityTypeConfiguration<Cook>
    {
        public void Configure(EntityTypeBuilder<Cook> builder)
        {
            builder.HasData(
                new List<Cook>
                {
                    new Cook
                    {
                        Id = 1,
                        Name = "Jitske",
                        Description = "Hoi, mijn naam is Jitske. Ik ben 36 jaar en werk naast GoedEten bij de biologische " +
                        "winkel De Kruidentuin in de Bankastraat in Den Haag. Vanaf mijn begin twintiger jaren kreeg ik last"+
                        "van verschillende klachten, waardoor ik me ben gaan verdiepen in voeding en wat dit doet met mijn lichaam." +
                        "Ik kwam er achter hoeveel voeding kan doen voor de gezondheid. Voor GoedEten laat ik mij deels inspireren door het seizoen en wat lokale producten ons te beiden hebben. Tevens gebruik ik veel traditionele Japanse ingrediënten in mijn gerechten om de beste combinatie te vinden tussen dichtbij en ver weg ",
                        Motivation = "Ik sta helemaal achter de filosofie van GoedEten, waardoor het voor mij" +
                        " altijd weer een feest is om te koken voor mensen die duurzame en gezonde maaltijden kunnen waarderen. " +
                        "Mijn persoonlijke missie is om duurzaam en gezonde voeding toegankelijker te maken voor een breder publiek. " +
                        "Iedereen kent wel de rush van de week. Druk op werk, kinderen die aandacht vragen, sporten, sociale contacten en" +
                        " dan willen we ook nog gezond eten. Een snelle hap is dan wel eens makkelijk. Hoe fijn zou het zijn als er dan" +
                        " dagvers voor je gekookt wordt met heerlijke duurzame gerechten. Je maakt mij een blij mens als ik voor je mag koken.",
                        Specialization = "Mijn specialiteit is om traditionele gerechten zó te maken dat ze ook geschikt zijn voor mensen met verschillende intoleranties en diëten, zonder concessies te doen aan smaak en kwaliteit. ",
                        Address = "'s-Gravenhage",
                        Email = "jitske@test.nl",
                        PhoneNumber = "012231314242",
                        LocationName = "'s-Gravenhage",
                        Active = true,
                        Photo ="https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgezbdxcwwhfs4.png"

                    },
                    new Cook
                    {
                        Id = 2,
                        Name = "Claudia",
                        Description = "Peulvruchten koningin",
                        Motivation = " motivatie...",
                        Specialization = " specialiteit...",
                        Address = "'s-Gravenhage",
                        Email = "claudia@test.nl",
                        PhoneNumber = "012231314242",
                        LocationName = "'s-Gravenhage",
                        Active = true,
                        Photo =  "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgegmjfvezvefb.png"

                    },
                    new Cook
                    {
                        Id = 3,
                     Name = "Elkie",
                        Description = "Arabische eetcultuur",
                        Address = "'s-Gravenhage",
                        Motivation = " motivatie...",
                        Specialization = " specialiteit...",
                        Email = "elkie@test.nl",
                        PhoneNumber = "012231314242",
                        LocationName = "'s-Gravenhage",
                        Active = true,
                        Photo =  "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgegcolt3bfwkv.png"

                    },
                    new Cook
                    {
                        Id = 4,
                       Name = "Angela",
                        Description = "Koreaanse smaak",
                        Motivation = " motivatie...",
                        Specialization = " specialiteit...",
                        Address = "'s-Gravenhage",
                        Email = "angela@test.nl",
                        PhoneNumber = "012231314242",
                        LocationName = "'s-Gravenhage",
                        Active = true,
                        Photo =  "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgenfyjsdeinkc.png"
                    },
                    new Cook
                    {
                        Id = 5,
                       Name = "Liselotte",
                        Description = "Haagse lekkernijen",
                        Motivation = " motivatie...",
                        Specialization = " specialiteit...",
                        Address = "'s-Gravenhage",
                        Email = "liselotte@test.nl",
                        PhoneNumber = "012231314242",
                        LocationName = "'s-Gravenhage",
                        Active = true,
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgef1vhh2tapxn.png"
                    },
                    new Cook
                    {
                        Id = 6,
                       Name = "Yannik & Anu",
                        Description = "Indische roots",
                        Motivation = " motivatie...",
                        Specialization = " specialiteit...",
                        Address = "'s-Gravenhage",
                        Email = "yannikenanu@test.nl",
                        PhoneNumber = "012231314242",
                        LocationName = "'s-Gravenhage",
                        Active = true,
                        Photo ="https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fgefozm3tpuwlx.png"
                    },
                    new Cook
                    {
                        Id = 7,
                        Name = "Mark",
                        Description = "Global cooking",
                        Motivation = " motivatie...",
                        Specialization = " specialiteit...",
                        Address = "'s-Gravenhage",
                        Email = "mark@test.nl",
                        PhoneNumber = "012231314242",
                        LocationName = "'s-Gravenhage",
                        Active = true,
                        Photo = "https://goedeten.blob.core.windows.net/goed-eten/cooks%2Fge01ibtkyeeu4.png"
                    },

                    }); 
        }
    }
}