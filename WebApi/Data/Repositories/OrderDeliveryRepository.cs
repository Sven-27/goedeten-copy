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
        public interface IOrderDeliveryRepository
        {
            IQueryable<OrderDelivery> GetAll();
            Task<OrderDelivery> GetById(int allergenId);
            Task<OrderDelivery> GetByIdWithTracking(int allergenId);
            Task<OrderDelivery> Create(OrderDelivery entity);
            Task Update(OrderDelivery entity);
            Task Delete(int allergenId);
        }

        public class OrderDeliveryRepository : GenericRepository<OrderDelivery>, IOrderDeliveryRepository
        {
            private readonly MainDbContext _mainDbContext;

            public OrderDeliveryRepository(MainDbContext mainDbContext) : base(mainDbContext)
            {
                _mainDbContext = mainDbContext;
            }
        public override async Task<OrderDelivery> GetById(int Id)
        {
            var dish = await _mainDbContext.Set<OrderDelivery>()
                .AsNoTracking().Where(d => d.Id == Id)
                .Include(d => d.DishOrders)
                .SingleOrDefaultAsync();

            return dish;
        }
        public override  IQueryable<OrderDelivery> GetAll()
        {
            return _mainDbContext.Set<OrderDelivery>()
                .AsNoTracking()
                .Include(d => d.DishOrders);
        }

    }
}
