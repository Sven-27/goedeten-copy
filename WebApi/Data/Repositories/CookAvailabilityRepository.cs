using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using System.Linq;
using System.Threading.Tasks;
using CrossCuttingConcerns.EntityFrameworkGenerics;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace Data.Repositories
{
    public interface ICookAvailabilityRepository
    {
        IQueryable<CookAvailability> GetAll();
        Task<PaginatedList<CookAvailability>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pageSize);
        Task<CookAvailability> GetById(int id);
        IQueryable<CookAvailability> GetByCookId(int id);

        Task<CookAvailability> GetByIdWithTracking(int id);
        Task<CookAvailability> Create(CookAvailability entity);
        Task Update(CookAvailability entity);
        Task Delete(int id);
        Task<List<CookAvailabilityDisplay>> GetByDate(DateTime date);
    }
    public class CookAvailabilityRepository : GenericRepository<CookAvailability>, ICookAvailabilityRepository
    {
        private readonly MainDbContext _mainDbContext;
        public CookAvailabilityRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;

        }

        public override async Task<CookAvailability> Create(CookAvailability entity)
        {

            var doubles = await _mainDbContext.Set<CookAvailability>().AsNoTracking()
                .Where(c => c.Date.Date == entity.Date.Date)
                .Where(c => c.CookId == entity.CookId).ToListAsync();

            if (doubles.Count == 0)
            {
                await _mainDbContext.Set<CookAvailability>().AddAsync(entity);
                await _mainDbContext.SaveChangesAsync();
                return entity;
            }
            return null;

        }

        public virtual IQueryable<CookAvailability> GetByCookId(int cookId)
        {
            // return _mainDbContext.Set<CookAvailability>().Where(e => e.CookId == _cookId).AsNoTracking();
            return GetAll().Where(e => e.CookId == cookId);
        }

        public async Task<List<CookAvailabilityDisplay>> GetByDate(DateTime date)
        {
            
             var result = await
            (
                from c in _mainDbContext.Cooks.Where(y => y.Active == true)
                from ca in _mainDbContext.CookAvailabilities.Where(x => x.CookId == c.Id && x.Date == date).DefaultIfEmpty()
                select new CookAvailabilityDisplay
                {
                    Name = c.Name,
                    LocationName = c.LocationName,
                    CookId = c.Id,
                    Id = ca != null ? ca.Id : 0,
                    Date = ca != null ? ca.Date : date,
                    Available = ca != null ? ca.Available : false
                }
            ).ToListAsync();         
            return result;
        }
    }
}
