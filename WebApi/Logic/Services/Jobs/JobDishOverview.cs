using System.Linq;
using System.Threading.Tasks;
using Data.Repositories;
using Logic.Services;
using Microsoft.EntityFrameworkCore;
using Quartz;

namespace Logic.Services.Jobs
{

    [DisallowConcurrentExecution]
    public class JobDishOverview : IJob
    {
        private readonly ILocationRepository _locationRepository;
        private readonly IEmailService _emailService;

        public JobDishOverview(
             ILocationRepository locationRepository,
            IEmailService emailService)
        {
            _locationRepository = locationRepository;
            _emailService = emailService;
        }

        public async Task Execute(IJobExecutionContext context)
        {
            var resultList = await _locationRepository
              .GetAll()
              .ToListAsync()
              .ConfigureAwait(false);   
            

            foreach (var location in resultList)
            {
               await _emailService.SendDishOverviewMessage(location.Name,location.Email).ConfigureAwait(false);
            }
        }
    }
}