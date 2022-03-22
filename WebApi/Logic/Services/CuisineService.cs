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
    public interface ICuisineService
    {
        Task<CuisineDto> GetById(int id);
        Task<List<CuisineDto>> GetAll();
        Task<bool> Create(CuisineDto entity);
        Task<bool> Delete(int id);
        Task<bool> Update(CuisineDto entity); //put
    }
    public class CuisineService : ICuisineService
    {
        private readonly ICuisineRepository _repository;
        private readonly IMapper _mapper;

        public CuisineService(ICuisineRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<bool> Create(CuisineDto entity)
        {
            try
            {
                var newEntity = _mapper
                    .Map<CuisineDto, Cuisine>(entity);
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

        public async Task<List<CuisineDto>> GetAll()
        {
            var resultList = await _repository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<CuisineDto>>(resultList);
        }

        public async Task<CuisineDto> GetById(int id)
        {
            var result = await _repository
                .GetById(id)
                .ConfigureAwait(false);

            return result != null ? _mapper.Map<CuisineDto>(result) : null;
        }

        public async Task<bool> Update(CuisineDto entity)
        {
            try
            {

                var updateCuisine = _mapper
                    .Map<CuisineDto, Cuisine>(entity);
                await _repository.Update(updateCuisine).ConfigureAwait(false);
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
