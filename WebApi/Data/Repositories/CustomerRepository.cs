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
    public interface ICustomerRepository
    {
        IQueryable<Customer> GetAll();

        Task<PaginatedList<Customer>> GetList(
            int? pageNumber,
            string sortField,
            string sortOrder,
            int? pagesize
        );

        Task<Customer> GetById(int customerId);
        Task<Customer> GetByIdWithTracking(int customerId);
        Task<Customer> Create(Customer entity);
        Task Update(Customer entity);
        Task Delete(int customerId);
    }

    public class CustomerRepository : GenericRepository<Customer>, ICustomerRepository
    {
        private readonly MainDbContext _mainDbContext;

        public CustomerRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
             _mainDbContext = mainDbContext;
        }

        public override async Task<Customer> Create(Customer entity)
        {

            var doubles = await _mainDbContext.Set<Customer>().AsNoTracking()
                .Where(c => c.Email == entity.Email)
                .Where(c => c.Zipcode == entity.Zipcode).ToListAsync();

            if (doubles.Count == 0)
            {
                try
                {
                    await _mainDbContext.Set<Customer>().AddAsync(entity);
                    await _mainDbContext.SaveChangesAsync();
                    return entity;
                }
                catch (Exception ex)
                {
                    Debug.WriteLine(ex.Message);
                    return null;
                }
            }
            else {
                return doubles[0];
            }
            

        }
    }
}
