using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.Enums;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public interface IOrderRepository
    {
        IQueryable<Order> GetAll();

        Task<PaginatedList<Order>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pagesize
        );


        Task<Order> GetById(int allergenId);
        Task<Order> GetByIdWithTracking(int allergenId);
        Task<Order> Create(Order entity);
        Task Update(Order entity);
        Task Delete(int allergenId);
        Task<Order> AddTransactions(List<OrderTransaction> transactions);
    }

    public class OrderRepository : GenericRepository<Order>, IOrderRepository
    {
        private readonly MainDbContext _mainDbContext;
        private readonly IDishAvailabilityRepository _dishAvailabilityRepository;

        public OrderRepository(
            MainDbContext mainDbContext, 
            IDishAvailabilityRepository dishAvailabilityRepository) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
            _dishAvailabilityRepository = dishAvailabilityRepository;
        }
        public override async Task<Order> GetById(int Id)
        {
            var dish = await _mainDbContext.Set<Order>()
                .AsNoTracking().Where(o => o.Id == Id)
                .Include(o => o.Deliveries).ThenInclude(d => d.DishOrders).ThenInclude(dishOrder => dishOrder.Dish).ThenInclude(dishOrder => dishOrder.Cook)
                .Include(o => o.Transactions)
                .SingleOrDefaultAsync()
                .ConfigureAwait(false);

            return dish;
        }

        public async Task<Order> AddTransactions(List<OrderTransaction> transactions)
        {
            Order order = null;
            try
            {
                foreach (OrderTransaction transaction in transactions)
                {
                    order = await _mainDbContext.Orders
                            .Include(o => o.Transactions)
                            .Include(o => o.Deliveries).ThenInclude(d => d.DishOrders)
                            .SingleOrDefaultAsync(o => o.Id == transaction.OrderId)
                            .ConfigureAwait(false);
                    order.Transactions.Add(transaction);

                    if ((int)order.Status < 3)
                        switch (transaction.TransactionStatus)
                        {
                            case "COMPLETED": order.Status = OrderStatus.Approved; break;
                            case "IN_PROGRESS": order.Status = OrderStatus.Processing; break;
                            case "EXPIRED": order.Status = OrderStatus.FailedOrCancelled; break;
                            case "CANCELLED": order.Status = OrderStatus.FailedOrCancelled; break;
                        }
                    if (order.Status == OrderStatus.FailedOrCancelled)
                    {
                        var listUpdates = order.Deliveries.SelectMany(item => item.DishOrders.Select(dish => new DishAvailabilityOrder
                                                            {
                                                                Id = dish.DishAvailabilityId,
                                                                Quantity = dish.Quantity
                                                            }))
                                                            .ToList();

                        await _dishAvailabilityRepository.Update(listUpdates, false).ConfigureAwait(false);
                    }
                    await _mainDbContext.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                order.Details = ex.Message;
                return order;
            }
            return order;
        }
    }
}
