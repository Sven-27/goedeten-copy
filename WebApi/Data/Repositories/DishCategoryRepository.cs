using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public interface IDishCategoryRepository
    {
        IQueryable<DishCategory> GetAll();

        Task<DishCategory> GetById(int id);
        Task<DishCategory> GetByIdWithTracking(int id);
        Task<DishCategory> Create(DishCategory entity);
        Task Update(DishCategory entity);
        Task Delete(int id);
    }

    public class DishCategoryRepository : GenericRepository<DishCategory>, IDishCategoryRepository
    {
        private readonly MainDbContext _mainDbContext;

        public DishCategoryRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }
    }
}
