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
    public interface ICookAvailabilityService 
    {
        Task<CookAvailabilityDto> GetById(int cookId);
        Task<List<CookAvailabilityDto>> GetByCookId(int cookId);
        Task<List<CookAvailabilityDto>> GetAll();
        Task<bool> Create(CookAvailabilityDto cook);
        Task<bool> Delete(int cookId);
        Task<bool> Update( CookAvailabilityDto entity); //put
        Task<List<CookAvailabilityDisplayDto>> GetByDate(DateTime date);
    }
    public class CookAvailabilityService : ICookAvailabilityService
    {
        private readonly ICookAvailabilityRepository _repository;
        private readonly IMapper _mapper;

        public CookAvailabilityService(ICookAvailabilityRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<bool> Create(CookAvailabilityDto entity)
        {
                try
                {
                    var newEntity = _mapper.Map<CookAvailabilityDto, CookAvailability>(entity);
                    var result = await _repository.Create(newEntity).ConfigureAwait(false);
                    return result != null ? true : false;
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

        public async Task<List<CookAvailabilityDto>> GetAll()
        {
            var cookAvList = await _repository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<CookAvailabilityDto>>(cookAvList);
        }

        public async Task<List<CookAvailabilityDto>> GetByCookId(int cookId)
        {
            var cookAvList = await _repository
                .GetByCookId(cookId)
                .ToListAsync()
                .ConfigureAwait(false);
            return _mapper.Map<List<CookAvailabilityDto>>(cookAvList);
        }

        public async Task<CookAvailabilityDto> GetById(int id)
        {
            var cookAv = await _repository
                .GetById(id)
                .ConfigureAwait(false);

            return cookAv != null ? _mapper.Map<CookAvailabilityDto>(cookAv) : null;
        }

        public async Task<List<CookAvailabilityDisplayDto>> GetByDate(DateTime date)
        {
            var result = await _repository.GetByDate(date);

            return _mapper.Map<List<CookAvailabilityDisplayDto>>(result);
        }

        public async  Task<bool> Update(CookAvailabilityDto entity)
        {
            try
            {

                var updateCookAv = _mapper
                    .Map<CookAvailabilityDto, CookAvailability>(entity);
                await _repository.Update(updateCookAv).ConfigureAwait(false);
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
