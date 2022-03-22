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
    public interface ILocationService
    {
        Task<LocationDto> GetById(int id);
       
        Task<List<LocationDto>> GetAll();

        
        Task<bool> Create(LocationDto entity);
        Task<bool> Update(LocationDto entity);
        Task<bool> Delete(int id);
    }

    public class LocationService : ILocationService
    {

        private readonly ILocationRepository _repository;
        private readonly IMapper _mapper;

        public LocationService(
            ILocationRepository repository,
            IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public  async Task<bool> Create(LocationDto entity)
        {
            try
            {
                var newEntity = _mapper
                    .Map<LocationDto, Location>(entity);
                await _repository.Create(newEntity).ConfigureAwait(false);
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
                await _repository.Delete(id).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<List<LocationDto>> GetAll()
        {
            try
            {
                var resultList = await _repository
              .GetAll()
              .ToListAsync()
              .ConfigureAwait(false);

                return _mapper.Map<List<LocationDto>>(resultList);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }

        public async Task<LocationDto> GetById(int id)
        {
            try 
            {
                var result = await _repository
               .GetById(id)
               .ConfigureAwait(false);

                return result != null ? _mapper.Map<LocationDto>(result) : null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }

      
        public async Task<bool> Update(LocationDto entity)
        {
            try
            {

                var result = _mapper
                    .Map<LocationDto, Location>(entity);
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
