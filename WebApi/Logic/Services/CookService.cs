using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using AutoMapper;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.EntityFrameworkCore;

namespace Logic.Services
{
    public interface ICookService
    {
        Task<CookDto> GetById(int cookId);
        Task<List<CookDisplayDto>> GetAll();

        Task<PaginatedList<CookDto>> GetList(PaginatedListDto paginatedList);
        Task<PaginatedList<CookDto>> GetFilteredList(CookPagedFilterDto paginatedList);

        Task<CookDto> Create(CookDto cook);
        Task<bool> Update(CookDto entity);
        Task<bool> Delete(int cookId);
        Task<bool> CreateBundle(List<CookDto> entityList);
    }

    public class CookService : ICookService
    {
        private readonly ICookRepository _cookRepository;
        private readonly IMapper _mapper;

        public CookService(
            ICookRepository cookRepository,
            IMapper mapper)
        {
            _cookRepository = cookRepository;
            _mapper = mapper;
        }

        public async Task<List<CookDisplayDto>> GetAll()
        {
            var cookList = await _cookRepository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<CookDisplayDto>>(cookList);
        }

        public async Task<PaginatedList<CookDto>> GetList(PaginatedListDto paginatedList)
        {
            var cookList = await _cookRepository
                .GetList(
                paginatedList.PageNumber,
                paginatedList.SortField,
                paginatedList.SortOrder,
                paginatedList.PageSize)
                .ConfigureAwait(false);
                       
            return _mapper.Map<PaginatedList<CookDto>>(cookList);
        }
        public async Task<PaginatedList<CookDto>> GetFilteredList(CookPagedFilterDto paginatedList)
        {
            var cookList = await _cookRepository
                .GetFilteredList(
                    paginatedList.PageNumber,
                    paginatedList.SortField,
                    paginatedList.SortOrder,
                    paginatedList.PageSize,
                    paginatedList.NameFilter,
                    paginatedList.LocationFilter,
                    paginatedList.ActiveFilter)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<CookDto>>(cookList);
        }
        public async Task<CookDto> Create(CookDto cook)
        {
            try
            {
                var newCook = _mapper.Map<CookDto, Cook>(cook);
                var result = await _cookRepository.Create(newCook).ConfigureAwait(false);
                return result != null ? _mapper.Map<CookDto>(result):null ;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }

        public async Task<CookDto> GetById(int cookId)
        {
            var cook = await _cookRepository
                .GetById(cookId)
                .ConfigureAwait(false);
            return cook != null ? _mapper.Map<CookDto>(cook) : null;
        }

        public async Task<bool> Update(CookDto cook)
        {
            try
            {
                var updateCook = _mapper.Map<CookDto, Cook>(cook);
                await _cookRepository
                    .Update(updateCook)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Delete(int cookId)
        {
            try
            {
                await _cookRepository
                    .Delete(cookId)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> CreateBundle(List<CookDto> entityList)
        {
            var updateEntityList = _mapper.Map<List<CookDto>, List<Cook>>(entityList);
            await _cookRepository
                .CreateBundle(updateEntityList)
                .ConfigureAwait(false);
            return true;
        }
           

    }
}