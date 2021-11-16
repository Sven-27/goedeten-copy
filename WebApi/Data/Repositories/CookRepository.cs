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
    public interface ICookRepository
    {
        IQueryable<Cook> GetAll();

        Task<PaginatedList<Cook>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize);
        Task<PaginatedList<Cook>> GetFilteredList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize,
            string nameFilter,
            string locationFilter,
            bool? activeFilter);

        Task<Cook> GetById(int cookId); //get request
        Task<Cook> GetByIdWithTracking(int cookId); // ???????
        Task<Cook> Create(Cook entity); //post request
        Task Update(Cook entity); //put
        Task Delete(int cookId); //delete
        Task CreateBundle(List<Cook> entityList);
    }

    public class CookRepository : GenericRepository<Cook>, ICookRepository
    {
        private readonly MainDbContext _mainDbContext;

        public CookRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
             _mainDbContext = mainDbContext;
        }

        public async Task<PaginatedList<Cook>> GetFilteredList(int? pageNumber, string sortField, string sortOrder,
           int? pageSize, string nameFilter,string locationFilter, bool? activeFilter)
        {
            var list = _mainDbContext.Set<Cook>().AsNoTracking();
            list = !(string.IsNullOrWhiteSpace(nameFilter)) ? list.Where(z => z.Name.Contains(nameFilter)) : list;
            list = !(string.IsNullOrWhiteSpace(locationFilter)) ? list.Where(z => z.LocationName.Contains(locationFilter)) : list;
            list = (activeFilter != null) ? list.Where(z => z.Active.Equals(activeFilter)) : list;
            return await PaginatedList<Cook>
                .CreateAsync(list.AsNoTracking(), pageNumber ?? 1, pageSize ?? 10, sortField ?? "Id", sortOrder ?? "ASC");
        }
    }
}