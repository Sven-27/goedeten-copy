namespace CrossCuttingConcerns.Settings
{
    public class AppSettings
    {
        public string Secret { get; set; }
        public string ActivateAccountUrl { get; set; }
        public string TempPassword { get; set; }
        public string SigningKey { get; set; }
        public string Token { get; set; }
        public string ReturnUrl { get; set; }
        public string PostNlApiKey { get; set; }
    }
}