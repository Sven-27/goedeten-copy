using CrossCuttingConcerns.Settings;
using Microsoft.Extensions.Options;
using OmniKassa;
using OmniKassa.Model.Response.Notification;

namespace Logic.Services
{
    public interface IOmniKassaService
    {
    }

    public class OmniKassaService : IOmniKassaService
    {
        private readonly AppSettings _settings;
        private static Endpoint _omniKassa;
        private static ApiNotification _notification;

        public OmniKassaService(IOptions<AppSettings> settings)
        {
            _settings = settings.Value;
#if DEBUG
            _omniKassa ??= 
                Endpoint.Create(
                    OmniKassa.Environment.SANDBOX, 
                    _settings.SigningKey, 
                    _settings.Token);
#else
            _omniKassa ??= 
                Endpoint.Create(
                OmniKassa.Environment.PRODUCTION,
                _settings.SigningKey,
                _settings.Token);
#endif
        }
    }
}
