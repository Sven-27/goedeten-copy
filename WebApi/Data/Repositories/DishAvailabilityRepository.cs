using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using DataLayer;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
    public interface IDishAvailabilityRepository
    {
        IQueryable<DishAvailability> GetAll();
        Task<PaginatedList<DishAvailability>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize);
        Task<DishAvailability> GetById(int id);
        IQueryable<DishAvailability> GetByDishId(int id);

        Task<DishAvailability> GetByIdWithTracking(int id);
        Task<DishAvailability> Create(DishAvailability entity);
        Task Update(DishAvailability entity);
        //Task<bool> Update(List<DishAvailabilityOrder> entities, bool subtract);
        Task Delete(int id);
        Task<List<DishAvailabilityDisplay>> GetByPeriod(DateTime date, int numDays);
        Task<List<DishAvailabilityPlanning>> GetByDate(DateTime date, int id);
    }


    public class DishAvailabilityRepository : GenericRepository<DishAvailability>, IDishAvailabilityRepository
    {
        private readonly MainDbContext _mainDbContext;
        public DishAvailabilityRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

        public virtual IQueryable<DishAvailability> GetByDishId(int _dishId)
        {
            return GetAll().Where(e => e.DishId == _dishId);
        }

        public override async Task<DishAvailability> Create(DishAvailability entity)
        {

            var doubles = await _mainDbContext.Set<DishAvailability>().AsNoTracking()
                .Where(d => d.Date.Date == entity.Date.Date)
                .Where(d => d.DishId == entity.DishId).ToListAsync();

            if (doubles.Count == 0)
            {
                await _mainDbContext.Set<DishAvailability>().AddAsync(entity);
                await _mainDbContext.SaveChangesAsync();
                return entity;
            }
            return null;

        }

        //public async Task<bool> Update(List<DishAvailabilityOrder> entities, bool subtract)
        //{
            //try
            //{
            //    foreach (DishAvailabilityOrder entity in entities)
            //    {
            //        var updateItem = 
            //            await _mainDbContext.Set<DishAvailability>()
            //                .AsNoTracking()
            //                .SingleOrDefaultAsync(e => e.Id == entity.Id).ConfigureAwait(false);

            //        _mainDbContext.Entry(updateItem).State = EntityState.Detached;

            //        if (subtract)
            //        {
            //            if (updateItem.CurrentQuantity - entity.Quantity >= 0)
            //            {
            //                updateItem.CurrentQuantity -= entity.Quantity;
            //                // _mainDbContext.Set<DishAvailability>().Update(updateItem);
            //            }
            //            else
            //            {
            //                throw new Exception("Supply quantity too low!");
            //            }
            //        }
            //        else
            //        {
            //            updateItem.CurrentQuantity += entity.Quantity;
            //        }

            //        await Update(updateItem).ConfigureAwait(false);
            //        //_mainDbContext.Set<DishAvailability>().Update(updateItem);
            //    }
            //    await _mainDbContext.SaveChangesAsync().ConfigureAwait(false);
            //}
            //catch (Exception ex)
            //{
            //    Debug.WriteLine(ex.Message);
            //    throw new Exception(ex.Message);
            //}
            //return true;
        //}


        public async Task<List<DishAvailabilityDisplay>> GetByPeriod(DateTime date, int numDays)
        {
            var result = await
            (from da in _mainDbContext.DishAvailabilities
             join d in _mainDbContext.Dishes on da.DishId equals d.Id
             join cu in _mainDbContext.Cuisine on d.CuisineId equals cu.Id
             join c in _mainDbContext.Cooks on d.CookId equals c.Id
             join ca in _mainDbContext.CookAvailabilities on d.CookId equals ca.CookId
             where (da.Date >= date && da.Date < date.AddDays(numDays))
             where (ca.Available == true &&
          ca.Date >= date && ca.Date < date.AddDays(numDays))
             where (da.Date == ca.Date)
             where (c.Active == true)
             orderby d.Name

             select new DishAvailabilityDisplay
             {
                 Id = da.Id,
                 Date = da.Date,
                 CurrentQuantity = da.CurrentQuantity,
                 PlannedQuantity = da.PlannedQuantity,
                 SoldQuantity = da.PlannedQuantity - da.CurrentQuantity,
                 DishId = da.DishId,
                 DishName = d.Name,
                 DishShortName = d.ShortName,
                 DishDescription = d.Description,
                 DishCuisine = cu.Name,
                 DishPhoto = d.Photo,
                 CookId = c.Id,
                 CookName = c.Name,
                 CookPhoto = c.Photo,
                 LocationName = c.LocationName,
                 DishCategoryName = d.DishCategory.Name
             }

            ).ToListAsync();

            return result;
        }



        public async Task<List<DishAvailabilityPlanning>> GetByDate(DateTime date, int cookId)
        {
            var result = await
            (from d in _mainDbContext.Dishes.Where(y => y.CookId == cookId)
             from da in _mainDbContext.DishAvailabilities.Where(x => x.DishId == d.Id && x.Date == date).DefaultIfEmpty()
             select new DishAvailabilityPlanning
             {
                 Id = da != null ? da.Id : 0,
                 Date = da != null ? da.Date : null,
                 CurrentQuantity = da != null ? da.CurrentQuantity : d.MaxQuantity,
                 PlannedQuantity = da != null ? da.PlannedQuantity : d.MaxQuantity,
                 DishId = d.Id,
                 DishName = d.Name,
                 DishCategory = d.DishCategory.Name,
                 CookId = d.CookId,
                 Planned = (da != null) // ? true : false,
             }
            ).ToListAsync();

            return result;
        }

    }
}
