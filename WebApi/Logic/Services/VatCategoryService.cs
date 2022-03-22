using AutoMapper;
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

    public interface IVatCategoryService
    {
        Task<VatCategoryDto> GetById(int id);
      
        Task<List<VatCategoryDto>> GetAll();
        Task<bool> Update(VatCategoryDto entity);
    }

    public class VatCategoryService : IVatCategoryService
    {

        private readonly IVatCategoryRepository _repository;
        private readonly IMapper _mapper;

        public VatCategoryService(
            IVatCategoryRepository repository,
            IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<VatCategoryDto>> GetAll()
        {
            try
            {
                var resultList = await _repository
              .GetAll()
              .ToListAsync()
              .ConfigureAwait(false);

                return _mapper.Map<List<VatCategoryDto>>(resultList);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }

        public async Task<VatCategoryDto> GetById(int id)
        {
            try 
            {
                var result = await _repository
               .GetById(id)
               .ConfigureAwait(false);

                return result != null ? _mapper.Map<VatCategoryDto>(result) : null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }

        public async Task<bool> Update(VatCategoryDto entity)
        {
            try
            {
                var result = _mapper
                    .Map<VatCategoryDto, VatCategory>(entity);
                await _repository.Update(result).ConfigureAwait(false);
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
