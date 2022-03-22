using AutoMapper;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Logic.Services
{
    public interface ICustomerService
    {
        Task<CustomerDto> GetById(int customerId);
        Task<List<CustomerDto>> GetAll();

        Task<PaginatedList<CustomerDto>> GetList(PaginatedListDto paginatedList);

        Task<bool> Create(CustomerDto customer);
        Task<bool> Update(CustomerDto entity);
        Task<bool> Delete(int customerId);
    }

    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapper;

        public CustomerService(
            ICustomerRepository customerRepository,
            IMapper mapper)
        {
            _customerRepository = customerRepository;
            _mapper = mapper;
        }

        public async Task<CustomerDto> GetById(int id)
        {
            var customer = await _customerRepository
                .GetById(id)
                .ConfigureAwait(false);
            return customer != null ? _mapper.Map<CustomerDto>(customer) : null;   
        }

        public async Task<List<CustomerDto>> GetAll()
        {
            var customers = await _customerRepository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<CustomerDto>>(customers);
        }

        public async Task<PaginatedList<CustomerDto>> GetList(PaginatedListDto paginatedList)
        {
            var customerList = await _customerRepository
                .GetList(
                paginatedList.PageNumber,
                paginatedList.SortField,
                paginatedList.SortOrder,
                paginatedList.PageSize)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<CustomerDto>>(customerList);

        }

        public async Task<bool> Create(CustomerDto customer)
        {
            
            try
            {
                var newCustomer = _mapper.Map<CustomerDto, Customer>(customer);
                var result = await _customerRepository
                    .Create(newCustomer)
                    .ConfigureAwait(false);
                return result != null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Update(CustomerDto customer)
        {
            try
            {
                var updateCustomer = _mapper.Map<CustomerDto, Customer>(customer);
                await _customerRepository
                    .Update(updateCustomer)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Delete(int customerId)
        {
            try
            {
                await _customerRepository
                    .Delete(customerId)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }
    }
}
