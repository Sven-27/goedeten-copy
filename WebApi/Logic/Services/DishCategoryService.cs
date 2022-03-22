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
    public interface IDishCategoryService
    {
        Task<DishCategoryDto> GetById(int id);
        Task<DishCategoryDto> GetByIdWithTracking(int id);
        Task<List<DishCategoryDto>> GetAll();

       Task<bool> Create(DishCategoryDto entity);
        Task<bool> Update(DishCategoryDto entity);
        Task<bool> Delete(int id);
    }

    public class DishCategoryService : IDishCategoryService
    {
        private readonly IDishCategoryRepository _repository;
        private readonly IMapper _mapper;

        public DishCategoryService(
            IDishCategoryRepository repository,
            IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<DishCategoryDto> GetById(int id)
        {
            var result = await _repository
                .GetById(id)
                .ConfigureAwait(false);
            return result != null ? _mapper.Map<DishCategoryDto>(result) : null;   
        }

        public async Task<DishCategoryDto> GetByIdWithTracking(int id)
        {
            var result = await _repository
                .GetByIdWithTracking(id)
                .ConfigureAwait(false);
            return result!= null ? _mapper.Map<DishCategoryDto>(result) : null;
        }

        public async Task<List<DishCategoryDto>> GetAll()
        {
            var result = await _repository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<DishCategoryDto>>(result);
        }

        public async Task<bool> Create(DishCategoryDto entity)
        {
            
            try
            {
                var newEntity = _mapper.Map<DishCategoryDto, DishCategory>(entity);
                await _repository
                    .Create(newEntity)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Update(DishCategoryDto entity)
        {
            try
            {
                var update = _mapper.Map<DishCategoryDto, DishCategory>(entity);
                await _repository
                    .Update(update)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                await _repository
                    .Delete(id)
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
