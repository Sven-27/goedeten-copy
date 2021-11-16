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
        public interface IOrderTransactionRepository
        {
            IQueryable<OrderTransaction> GetAll();
            Task<OrderTransaction> GetById(int allergenId);
            Task<OrderTransaction> GetByIdWithTracking(int allergenId);
            Task<OrderTransaction> Create(OrderTransaction entity);
            Task Update(OrderTransaction entity);
            Task Delete(int allergenId);
        }

        public class OrderTransactionRepository : GenericRepository<OrderTransaction>, IOrderTransactionRepository
        {
            private readonly MainDbContext _mainDbContext;

            public OrderTransactionRepository(MainDbContext mainDbContext) : base(mainDbContext)
            {
                _mainDbContext = mainDbContext;
            }                  

    }
}
