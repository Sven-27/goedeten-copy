using AutoMapper;
using Data.Repositories;
using Logic.DataTransferObjects;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Data.DataObjects;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;

namespace Logic.Services
{
    public interface IDishAvailabilityService
    {
        Task<DishAvailabilityDto> GetById(int dishId);
        Task<List<DishAvailabilityDto>> GetByDishId(int dishId);
        Task<List<DishAvailabilityDto>> GetAll();
        Task<bool> Create(DishAvailabilityDto dish);
        Task<bool> Delete(int dishId);
        Task<bool> Update(DishAvailabilityDto entity); //put
        Task<List<DishAvailabilityDisplayDto>> GetByPeriod(DateTime date, int numDays);
        Task<List<DishAvailabilityPlanningDto>> GetByDate(DateTime date, int id);
    }
    public class DishAvailabilityService : IDishAvailabilityService
    {
        private readonly IDishAvailabilityRepository _repository;
        private readonly IMapper _mapper;

        public DishAvailabilityService(IDishAvailabilityRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<bool> Create(DishAvailabilityDto entity)
        {
                try
                {
                    var newEntity = _mapper.Map<DishAvailabilityDto, DishAvailability>(entity);
                    var result = await _repository.Create(newEntity).ConfigureAwait(false);
                    return result != null;  //? true : false;
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
                await _repository.Delete(id).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<List<DishAvailabilityDto>> GetAll()
        {
            var dishAvList = await _repository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<DishAvailabilityDto>>(dishAvList);
        }

        public async Task<List<DishAvailabilityDto>> GetByDishId(int dishId)
        {
            var dishAvList = await _repository
                .GetByDishId(dishId)
                .ToListAsync()
                .ConfigureAwait(false);
            return _mapper.Map<List<DishAvailabilityDto>>(dishAvList);
        }

        public async Task<DishAvailabilityDto> GetById(int id)
        {
            var dishAv = await _repository
                .GetById(id)
                .ConfigureAwait(false);

            return dishAv != null ? _mapper.Map<DishAvailabilityDto>(dishAv) : null;
        }

        public async Task<List<DishAvailabilityDisplayDto>> GetByPeriod(DateTime date, int numDays)
        {
            var result = await _repository.GetByPeriod(date, numDays);
            return _mapper.Map<List<DishAvailabilityDisplayDto>>(result);
        }

        public async Task<bool> Update(DishAvailabilityDto entity)
        {
            try
            {
                var updateDishAv = _mapper.Map<DishAvailabilityDto, DishAvailability>(entity);
                await _repository.Update(updateDishAv).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<List<DishAvailabilityPlanningDto>> GetByDate(DateTime date, int id)
        {
            var result = await _repository.GetByDate(date, id);
            return _mapper.Map<List<DishAvailabilityPlanningDto>>(result);
        }
    }
}
