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
    public interface ILocationRepository 
    {
        IQueryable<Location> GetAll();

               
        Task<Location> GetById(int id);
        Task<Location> GetByIdWithTracking(int id);
        Task<Location> Create(Location entity);
        Task Update(Location entity);
        Task Delete(int id);
    }
    public class LocationRepository : GenericRepository<Location>, ILocationRepository
    {
        private readonly MainDbContext _mainDbContext;
        public LocationRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;

        }
    }
}
