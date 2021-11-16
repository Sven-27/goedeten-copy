using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using System.Linq;
using System.Threading.Tasks;
using CrossCuttingConcerns.EntityFrameworkGenerics;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Data.Repositories
{
    public interface ICuisineRepository
    {
        IQueryable<Cuisine> GetAll();
       
        Task<PaginatedList<Cuisine>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize);
        Task<Cuisine> GetById(int id);
        Task<Cuisine> GetByIdWithTracking(int id);

        Task<Cuisine> Create(Cuisine entity);
        Task Update(Cuisine entity);
        Task Delete(int id);
    }

    public class CuisineRepository : GenericRepository<Cuisine>, ICuisineRepository
    {
        private readonly MainDbContext _mainDbContext;

        public CuisineRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }
              
    }
}
