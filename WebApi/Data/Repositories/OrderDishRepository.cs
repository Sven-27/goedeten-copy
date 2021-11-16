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
        public interface IOrderDishRepository
        {
            IQueryable<OrderDish> GetAll();  
            Task<OrderDish> GetById(int allergenId);
            Task<OrderDish> GetByIdWithTracking(int allergenId);
            Task<OrderDish> Create(OrderDish entity);
            Task Update(OrderDish entity);
            Task Delete(int allergenId);
        }

        public class OrderDishRepository : GenericRepository<OrderDish>, IOrderDishRepository
        {
            private readonly MainDbContext _mainDbContext;

            public OrderDishRepository(MainDbContext mainDbContext) : base(mainDbContext)
            {
                _mainDbContext = mainDbContext;
            }                  

    }
}
