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
    public interface IIngredientRepository
    {
        IQueryable<Ingredient> GetAll();

        Task<PaginatedList<Ingredient>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pagesize
        );

        Task<Ingredient> GetById(int ingredientId);
        Task<Ingredient> GetByIdWithTracking(int ingredientId);
        Task<Ingredient> Create(Ingredient entity);
        Task Update(Ingredient entity);
        Task Delete(int ingredientId);
        Task CreateBundle(List<Ingredient> entityList);
    }

    public class IngredientRepository : GenericRepository<Ingredient>, IIngredientRepository
    {
        private readonly MainDbContext _mainDbContext;

        public IngredientRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
             _mainDbContext = mainDbContext;
        }
    }
}
