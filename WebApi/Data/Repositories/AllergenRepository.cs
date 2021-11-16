using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public interface IAllergenRepository
    {
        IQueryable<Allergen> GetAll();

        Task<PaginatedList<Allergen>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pagesize
        );
        Task<PaginatedList<Allergen>> GetFilteredList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize,
            string nameFilter           
        );

        Task<Allergen> GetById(int allergenId);
        Task<Allergen> GetByIdWithTracking(int allergenId);
        Task<Allergen> Create(Allergen entity);
        Task Update(Allergen entity);
        Task Delete(int allergenId);
    }

    public class AllergenRepository : GenericRepository<Allergen>, IAllergenRepository
    {
        private readonly MainDbContext _mainDbContext;

        public AllergenRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

        public async Task<PaginatedList<Allergen>> GetFilteredList(int? pageNumber, string sortField, string sortOrder, int? pageSize, string nameFilter)
        {
                var list = _mainDbContext.Set<Allergen>().AsNoTracking();
                list = !(string.IsNullOrWhiteSpace(nameFilter)) ? list.Where(z => z.Name.Contains(nameFilter)) : list;
               
                return await PaginatedList<Allergen>
                    .CreateAsync(list.AsNoTracking(), pageNumber ?? 1, pageSize ?? 10, sortField ?? "name", sortOrder ?? "ASC");

        }
    }
}
