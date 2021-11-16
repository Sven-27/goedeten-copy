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
    public interface IDishRepository
    {
        IQueryable<Dish> GetAll();

        Task<PaginatedList<Dish>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize);

        Task<PaginatedList<DishDisplay>> GetFilteredList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize,
            string categoryFilter,
            string nameFilter,
            string cookFilter,
            string cuisineFilter);

        Task<Dish> GetById(int dishId);
        Task<Dish> GetByIdWithTracking(int dishId);
        Task<Dish> Create(Dish entity);
        Task Update(Dish entity);
        Task Delete(int dishId);

        Task<Dish> SetAllergens(int dishId, List<int> allergens);

        Task<Dish> SetIngredients(int dishId, List<int> ingredients);

    }

    public class DishRepository : GenericRepository<Dish>, IDishRepository
    {
        private readonly MainDbContext _mainDbContext;


        public DishRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;

        }

        public override async Task<Dish> GetById(int dishId)
        {
            var dish = await _mainDbContext.Set<Dish>()
                .AsNoTracking().Where(d => d.Id == dishId)
                .Include(d => d.Cook)
                .Include(d => d.Cuisine)
                .Include(d => d.DishCategory)
                .Include(d => d.Ingredients)
                .Include(d => d.Allergens)
                .Include(d => d.DishAvailabilities)
                .SingleOrDefaultAsync();

            return dish;
        }

        public async Task<PaginatedList<DishDisplay>> GetFilteredList(int? pageNumber, string sortField, string sortOrder,
            int? pageSize, string categoryFilter, string nameFilter, string cookFilter, string cuisineFilter)
        {
            var list = _mainDbContext.Set<Dish>()
                .Include(d => d.Cook)
                .Include(d => d.Cuisine)
                .Include(d => d.DishCategory)
                .AsNoTracking();

            list = !(string.IsNullOrWhiteSpace(categoryFilter)) ? list.Where(z => z.DishCategory.Name.Contains(categoryFilter)) : list;
            list = !(string.IsNullOrWhiteSpace(nameFilter)) ? list.Where(z => z.Name.Contains(nameFilter)) : list;
            list = !(string.IsNullOrWhiteSpace(cuisineFilter)) ? list.Where(z => z.Cuisine.Name.Contains(cuisineFilter)) : list;
            list = !(string.IsNullOrWhiteSpace(cookFilter)) ? list.Where(z => z.Cook.Name.Contains(cookFilter)) : list;

            var listNew = (
                from d in list
                select new DishDisplay
                {
                    Id = d.Id,
                    Name = d.Name,
                    ShortName  = d.ShortName,
                    Description = d.Description,
                    Photo = d.Photo,
                    Heating = d.Heating,
                    P1 = d.P1,
                    P2 = d.P2,
                    P3 = d.P3,
                    P4 = d.P4,
                    P5 = d.P5,
                    PriceLarge = d.PriceLarge,
                    CookId = d.CookId,
                    Cook = d.Cook,
                    CookName = d.Cook.Name,
                    CuisineId = d.CuisineId,
                    Cuisine = d.Cuisine,
                    CuisineName = d.Cuisine.Name,
                    DishCategoryId = d.DishCategoryId,
                    DishCategory = d.DishCategory,
                    DishCategoryName = d.DishCategory.Name,
                    Ingredients = d.Ingredients,
                    Allergens = d.Allergens



                }
                );

            return await PaginatedList<DishDisplay>
                .CreateAsync(listNew.AsNoTracking(), pageNumber ?? 1, pageSize ?? 10, sortField ?? "Id", sortOrder ?? "ASC");
        }

  public async Task<Dish> SetAllergens(int dishId, List<int> allergens)
        {
            var dish = await _mainDbContext.Dishes
                .Include(d => d.Allergens)
                .SingleOrDefaultAsync(d => d.Id == dishId);

            var add = await _mainDbContext.Allergens
                .Where(a => allergens.Contains(a.Id))
                .ToListAsync();

            dish.Allergens.Clear();
            add.ForEach(a => dish.Allergens.Add(a));

            await _mainDbContext.SaveChangesAsync();
            return dish;
        }

        public async Task<Dish> SetIngredients(int dishId, List<int> ingredients)
        {
            var dish = await _mainDbContext.Dishes
                .Include(d => d.Ingredients)
                .SingleOrDefaultAsync(d => d.Id == dishId);

            var add = await _mainDbContext.Ingredients
                .Where(a => ingredients.Contains(a.Id))
                .ToListAsync();

            dish.Ingredients.Clear(); // EF Core does it automaticaly NOT
            add.ForEach(a => dish.Ingredients.Add(a));

            await _mainDbContext.SaveChangesAsync();
            return dish;
        }


    }
}