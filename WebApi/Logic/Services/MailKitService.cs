using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;
using System.Threading.Tasks;

namespace Logic.Services
{
    public class MailKitEmailSenderOptions
    {

        public MailKitEmailSenderOptions()
        {
            HostSecureSocketOptions = SecureSocketOptions.Auto;
        }

        public string HostAddress { get; set; }

        public int HostPort { get; set; }

        public string HostUsername { get; set; }

        public string HostPassword { get; set; }

        public SecureSocketOptions HostSecureSocketOptions { get; set; }

        public string SenderEMail { get; set; }

        public string SenderName { get; set; }
    }

    public interface IMailKitService
    {
        MailKitEmailSenderOptions Options { get; set; }
        Task SendEmailAsync(string email, string subject, string message);
        Task Execute(string to, string subject, string message);
    }

    public class MailKitService : IMailKitService
    {
        public MailKitEmailSenderOptions Options { get; set; }

        public MailKitService(IOptions<MailKitEmailSenderOptions> options)
        {
            this.Options = options.Value;
        }

        public Task SendEmailAsync(string email, string subject, string message)
        {
            return Execute(email, subject, message);
        }

        public Task Execute(string to, string subject, string message)
        {
            // create message
            var email = new MimeMessage
            {
                Sender = MailboxAddress.Parse(Options.SenderEMail)
            };
            if (!string.IsNullOrEmpty(Options.SenderName))
            {
                email.Sender.Name = Options.SenderName;
            }
            email.From.Add(email.Sender);
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = subject;
            email.Body = new TextPart(TextFormat.Html) { Text = message };

            // send email
            using (var smtp = new SmtpClient())
            {
                smtp.Connect(Options.HostAddress, Options.HostPort, Options.HostSecureSocketOptions);
                smtp.Authenticate(Options.HostUsername, Options.HostPassword);
                smtp.Send(email);
                smtp.Disconnect(true);
            }

            return Task.FromResult(true);
        }
    }
}
