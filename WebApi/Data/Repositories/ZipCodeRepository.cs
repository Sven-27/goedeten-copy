using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
    public interface IZipCodeRepository
    {
        IQueryable<ZipCode> GetAll();

        Task<PaginatedList<ZipCode>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize);

        //Task<PaginatedList<ZipCode>> GetFilteredList(
        //    int? pageNumber,
        //    string sortField,
        //    string sortOrder,
        //    int? pageSize,
        //    string zipFilter,
        //    string streetFilter,
        //    string cityFilter,
        //    bool? activeFilter
        //);
        Task<ZipCode> GetById(int id);
        Task<ZipCode> GetByZip( string zip);
        Task<ZipCode> GetByIdWithTracking(int id);
        Task<ZipCode> Create(ZipCode entity);
        Task Update(ZipCode entity);
        Task Delete(int id);
        Task CreateBundle(List<ZipCode> entityList);
    }
   
    public class ZipCodeRepository : GenericRepository<ZipCode>, IZipCodeRepository
    {
        private readonly MainDbContext _mainDbContext;
        public ZipCodeRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }


        

        public async Task<ZipCode> GetByZip(string _zip)
        {
            //TimeZoneInfo cstZone = TimeZoneInfo.FindSystemTimeZoneById("W.Europe Standard Time");
            
           var zipRegistry = new ZipCodeRegistry            {
                Id = 0,
              //  Date = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, cstZone),
               Date = DateTime.Now,
                Zip = _zip
            };
            await _mainDbContext.ZipCodesRegistry.AddAsync(zipRegistry);
            await _mainDbContext.SaveChangesAsync();



            var zipCode = await GetAll().Where(e => e.Zip == _zip).ToListAsync().ConfigureAwait(false);
            if (zipCode.Count >0)
            {
                foreach (ZipCode zip in zipCode)
                {
                    if (zip.Active== true) { return zip; }
                }
            }
            return null;
        }

        
    }
}
