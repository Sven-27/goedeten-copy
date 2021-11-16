using CrossCuttingConcerns.Functional;
using CrossCuttingConcerns.Settings;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Services
{
    public interface IEmailService
    {
        Task<bool> SendEmailMessage(string email, bool isAdmin = false);
        Task<bool> ResetPasswordEmailMessage(string email);
        Task<bool> SendDishOverviewMessage(string location, string email);
        Task<bool> TestEmail(string email, string title = "Test Email", string body = "");
        Task<bool> RegisterInterestEmail(string email, string zipcode);
        //Task<string> DishOverviewEmail(string location)
    }
    public class EmailService : IEmailService
    {

        private readonly IUserRepository _userRepository;
        private readonly IMailKitService _mailKitService;
        private readonly IDishAvailabilityRepository _dishAvailabilityRepository;
        private readonly AppSettings appSettings;
        public EmailService(
            IUserRepository userRepository,
            IMailKitService mailKitService,
            IDishAvailabilityRepository dishAvailabilityRepository,
            IOptions<AppSettings> settings)
        {
            _userRepository = userRepository;
            _mailKitService = mailKitService;
            _dishAvailabilityRepository = dishAvailabilityRepository;
            appSettings = settings.Value;
        }

        public async Task<bool> TestEmail(string email, string title, string body)
        {
            await _mailKitService.SendEmailAsync(email, title, TestEmailText(body)).ConfigureAwait(false);
            return true;
        }
        public async Task<bool> SendDishOverviewMessage(string location, string email)
        {
            var dishes = await _dishAvailabilityRepository.GetByPeriod(DateTime.Now.Date, 1);

            var cooksList = dishes.Where(dish => dish.LocationName == location).GroupBy(dish => dish.CookName).ToList();

            await _mailKitService.SendEmailAsync(email, "Vandaag te maken gerechten in: " + location, DishOverviewEmail(cooksList)).ConfigureAwait(false);
            return true;
        }

        private string DishOverviewEmail(List<IGrouping<string, DishAvailabilityDisplay>> cookList)
        {
            string dishesList = "<h3>Overzicht van gerechten die voor vandaag besteld zijn:</h3><br>";
            dishesList += "<table>";
            dishesList += "<tr><th style='text-align: left'>Gerecht:</th><th>Aantal verkocht:</th>";

            if (cookList.Count != 0)
            {
                foreach (var cook in cookList)
                {
                    dishesList += "<tr><h4>Kok: " + cook.Key + "</h4></tr>";
                    foreach (var dish in cook)
                    {

                        dishesList += "<tr><td>" + dish.DishName + "</td><td style='text-align: right'>" + (dish.PlannedQuantity - dish.CurrentQuantity) + "</td></tr>";
                    }
                    dishesList += "<tr></tr>";
                }
                dishesList += "</table>";
            } else
            {
                dishesList += "<tr>Voor vandaag zijn er op deze locatie helaas geen gerechten besteld :(</tr>";
            }
            var htmlContent = EmailHeader();
            htmlContent += dishesList;
            htmlContent += EmailFooter();
            return htmlContent;

        }
        public async Task<bool> RegisterInterestEmail(string email, string zipcode)
        {
            await _mailKitService.SendEmailAsync(email, "We houden je op de hoogte wanneer Goed Eten ook bij jou in de buurt levert!", RegisterInterestText(zipcode)).ConfigureAwait(false);
            return true;
        }

        public async Task<bool> ResetPasswordEmailMessage(string email)
        {
            // Based on email address, check if user exist
            var user = await _userRepository.GetByUserName(email).ConfigureAwait(false);
            if (user == null)
            {
                // no user with email address
                return false;
            }
            //var resetCode = System.Web.HttpUtility.UrlEncode(user.ResetCodeHash);
            var iets = new UserHelpers(appSettings);
            var tokenString = iets.UserTokenCreate(user.Id.ToString(), user.Role.ToString());


            var urlLocation = appSettings.ActivateAccountUrl;
            const string subject = "Reset uw wachtwoord voor Goed Eten!";

            var htmlContent = ResetPassword(urlLocation, tokenString);
            try
            {
                await _mailKitService.SendEmailAsync(email, subject, htmlContent).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }

            return true;
        }

        public async Task<bool> SendEmailMessage(string email, bool isAdmin = false)
        {
            // Based on email address, check if user exist
            var user = await _userRepository.GetByUserName(email).ConfigureAwait(false);
            if (user == null)
            {
                // no user with email address
                return false;
            }

            var resetCode = System.Web.HttpUtility.UrlEncode(user.ResetCodeHash);

            var urlLocation = appSettings.ActivateAccountUrl;
            const string subject = "Bevestig uw inschrijving bij Goed Eten";

            var htmlContent = isAdmin ?


                // ======================================================
                AdminEmail(urlLocation, email, resetCode) :
                CooksEmail(urlLocation, email, resetCode);
            //==============================================================

            try
            {
                await _mailKitService.SendEmailAsync(email, subject, htmlContent).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }

            return true;
        }



        private string EmailHeader()
        {
            var htmlContent =
                "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
            htmlContent += "<html><head>";
            htmlContent += "<style>body{background-color: #fff;}";
            htmlContent += ".content {";
            htmlContent += "min-height: 300px;";
            htmlContent += "background-color: #f1f1f1;";
            htmlContent += "margin:20px;";
            htmlContent += "padding:10px;";
            htmlContent += "border: 2px solid rgba(0, 0, 0, 0.08);";
            htmlContent += "border-radius: 4px 4px 4px 4px;";
            htmlContent += "}";
            htmlContent += ".logo-holder{";
            htmlContent += "text-align:left;";
            htmlContent += "}";
            htmlContent += ".logo-6 h3 {";
            htmlContent += "color: #e74c3c;";
            htmlContent += "font-family: 'Tahoma', serif;";
            htmlContent += "font-weight: 300;";
            htmlContent += "font-size: 30px;";
            htmlContent += "line-height: 1.3;";
            htmlContent += "}";
            htmlContent += ".logo-6 h3 span {";
            htmlContent += "background: #e74c3c;";
            htmlContent += "color: #fff;";
            htmlContent += "display: inline-block;";
            htmlContent += "line-height: 1.8;";
            htmlContent += "padding: 0 16px;";
            htmlContent += "}";
            htmlContent += "</style>";
            htmlContent += "</head>";
            htmlContent += "<body>";
            htmlContent += "<div class=\"content\">";
            htmlContent += "<div class=\"logo-holder logo-6\">";
            htmlContent += "<h3> <span> Goed  Eten </span></h3>";
            htmlContent += "</div>";
            return htmlContent;
        }

        private string EmailFooter()
        {
            var htmlContent = "</div>";
            htmlContent += "</body>";
            htmlContent += "</html>";
            return htmlContent;
        }

        private string AdminEmail(string urlLocation, string email, string resetCode)
        {
            var htmlContent = EmailHeader();
            htmlContent += "<h3>Beste GoedEten - Admin,</h3>";
            htmlContent += $"Welkom bij <b>Goed Eten</b> We gaan er samen een impactfeestje van maken!<br>";
            htmlContent +=
                "Voordat jullie van start kunnen gaan in admin panel van GoedEten app is het belangrijk je koks in de app registreren. ";
            htmlContent +=
                "Met deze app kunnen jullie makkelijk de dagelijkse taken uitvoeren (benodigde informatie invullen, zoals gerechten ";
            htmlContent +=
                "en koks info, planning, leveringen etc. <br><br>";
            htmlContent += "Via onderstaande link kun je koks aanmelden in de app.";
            htmlContent += "Koks krijgen vervolgens een mailtje waarin ze hun account kunnen bevestigen.<br>";
            htmlContent += "<a href=" + urlLocation + "/" + email + "/" + resetCode + ">here</a><br><br>";
            htmlContent += "Vriendelijke groet,<br>";
            htmlContent += "De Goed Eten cooperatie";
            htmlContent += EmailFooter();
            return htmlContent;
        }

        private string CooksEmail(string urlLocation, string email, string resetCode)
        {
            var htmlContent = EmailHeader();
            htmlContent += "<h3>Beste kok bij Goed Eten,</h3>";
            htmlContent += $"Welkom bij <b>Goed Eten</b> We gaan er samen een impactfeestje van maken!<br>";
            htmlContent +=
                "Voordat je van start kunt gaan is het belangrijk jezelf te registreren in de Goed Eten app! ";
            htmlContent +=
                "Met deze app kunnen jullie makkelijk de dagelijkse taken uitvoeren (benodigde informatie invullen, zoals gerechten ";
            htmlContent +=
                "en info over jezelf, planning etc.    <br><br>";
            htmlContent += "Via de onderstaande link kun je jouw account in de app bevestigen.<br>";
            htmlContent += "<a href=" + urlLocation + "/" + email + "/" + resetCode + ">here</a><br><br>";
            htmlContent += "Vriendelijke groet,<br>";
            htmlContent += "De Goed Eten cooperatie";
            htmlContent += EmailFooter();
            return htmlContent;
        }

        private string ResetPassword(string urlLocation, string resetCode)
        {
            var htmlContent = EmailHeader();
            htmlContent += "<h3>Beste Goed Eten admin,</h3>";
            htmlContent += "Dit is een reset wachtwoord email!<br>";
            htmlContent += "Via de onderstaande link kun je jouw wachtwoord resetten.<br>";
            htmlContent += "<a href=" + urlLocation + "/" + resetCode + ">Reset Wachtwoord</a><br><br>";
            htmlContent += "Vriendelijke groet,<br>";
            htmlContent += "De Goed Eten cooperatie";
            htmlContent += EmailFooter();
            return htmlContent;
        }

        private string TestEmailText(string body)
        {
            var htmlContent = EmailHeader();
            htmlContent += "<h3>Beste Goed Eten deelnemer,</h3>";
            htmlContent += "Dit is een TEST email!<br>";
            htmlContent += body + "<br>";
            htmlContent += "Vriendelijke groet,<br>";
            htmlContent += "De Goed Eten cooperatie";
            htmlContent += EmailFooter();
            return htmlContent;
        }

        private string RegisterInterestText(string zipcode)
        {
            var htmlContent = EmailHeader();
            htmlContent += "<h3>Beste geinteresseerde voor GoedEten,</h3>";
            htmlContent += $"Welkom bij <b>Goed Eten</b>! We gaan er samen een impactfeestje van maken!<br>";
            htmlContent +=
                "Je hebt je interesse geregistreerd voor Goed Eten en zult eenmalig een e-mail krijgen zodra wij ook op jouw postcode ";
            htmlContent +=
                "onze gerechten leveren.<br><br>";
            htmlContent +=
                "De door jou geregistreerde postcode is: " + zipcode + ".<br><br>";
            htmlContent += "Vriendelijke groet,<br>";
            htmlContent += "De Goed Eten cooperatie";
            htmlContent += EmailFooter();
            return htmlContent;
        }


    }
}
