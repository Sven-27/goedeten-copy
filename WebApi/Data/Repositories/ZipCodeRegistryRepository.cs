using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
    public interface IZipCodeRegistryRepository
    {
        IQueryable<ZipCodeRegistry> GetAll();

        Task<PaginatedList<ZipCodeRegistry>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize);

        Task<ZipCodeRegistry> GetById(int id);
        Task<List<ZipCodeRegistry>> GetByZip(string zip);
        Task<ZipCodeRegistry> GetByIdWithTracking(int id);
        Task<ZipCodeRegistry> Create(ZipCodeRegistry entity);
        Task Update(ZipCodeRegistry entity);
        Task Delete(int id);
    }

    public class ZipCodeRegistryRepository : GenericRepository<ZipCodeRegistry>, IZipCodeRegistryRepository
    {
        private readonly MainDbContext _mainDbContext;
        public ZipCodeRegistryRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

            

        public async Task<List<ZipCodeRegistry>> GetByZip(string _zip)
        {
            var zipCodeRegistry = await _mainDbContext.Set<ZipCodeRegistry>()
            .AsNoTracking().Where(e => e.Zip == _zip)
            .ToListAsync();
            if (zipCodeRegistry.Count > 0)
            {   
                return zipCodeRegistry;
            }
            return null;
        }

       
    }
}
    

