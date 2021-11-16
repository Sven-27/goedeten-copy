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
    public interface IVatCategoryRepository 
    {
        IQueryable<VatCategory> GetAll();

               
        Task<VatCategory> GetById(int id);
        Task<VatCategory> GetByIdWithTracking(int id);
        Task Update(VatCategory entity);
        
    }
    public class VatCategoryRepository : GenericRepository<VatCategory>, IVatCategoryRepository
    {
        private readonly MainDbContext _mainDbContext;
        public VatCategoryRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;

        }
    }
}
