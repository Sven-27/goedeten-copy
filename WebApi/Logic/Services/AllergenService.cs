using AutoMapper;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Services
{
    public interface IAllergenService
    {
        Task<AllergenDto> GetById(int allergenId);
        Task<AllergenDto> GetByIdWithTracking(int allergenId);
        Task<List<AllergenDto>> GetAll();

        Task<PaginatedList<AllergenDto>> GetList(PaginatedListDto paginatedList);
        Task<PaginatedList<AllergenDto>> GetFilteredList(PaginatedListDto paginatedList,
            string nameFilter);
        Task<bool> Create(AllergenDto allergen);
        Task<bool> Update(AllergenDto entity);
        Task<bool> Delete(int allergenId);
    }

    public class AllergenService : IAllergenService
    {
        private readonly IAllergenRepository _allergenRepository;
        private readonly IMapper _mapper;

        public AllergenService(
            IAllergenRepository allergenRepository,
            IMapper mapper)
        {
            _allergenRepository = allergenRepository;
            _mapper = mapper;
        }

        public async Task<AllergenDto> GetById(int id)
        {
            var allergen = await _allergenRepository
                .GetById(id)
                .ConfigureAwait(false);
            return allergen != null ? _mapper.Map<AllergenDto>(allergen) : null;   
        }

        public async Task<AllergenDto> GetByIdWithTracking(int id)
        {
            var allergen = await _allergenRepository
                .GetByIdWithTracking(id)
                .ConfigureAwait(false);
            return allergen != null ? _mapper.Map<AllergenDto>(allergen) : null;
        }

        public async Task<List<AllergenDto>> GetAll()
        {
            var allergens = await _allergenRepository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<AllergenDto>>(allergens);
        }


        public async Task<PaginatedList<AllergenDto>> GetList(PaginatedListDto paginatedList)
        {
            var allergenList = await _allergenRepository
                .GetList(
                paginatedList.PageNumber,
                paginatedList.SortField,
                paginatedList.SortOrder,
                paginatedList.PageSize)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<AllergenDto>>(allergenList);

        }

        public async Task<bool> Create(AllergenDto allergen)
        {
            
            try
            {
                var newAllergen = _mapper.Map<AllergenDto, Allergen>(allergen);
                await _allergenRepository
                    .Create(newAllergen)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Update(AllergenDto allergen)
        {
            try
            {
                var updateAllergen = _mapper.Map<AllergenDto, Allergen>(allergen);
                await _allergenRepository
                    .Update(updateAllergen)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Delete(int allergenId)
        {
            try
            {
                await _allergenRepository
                    .Delete(allergenId)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<PaginatedList<AllergenDto>> GetFilteredList(PaginatedListDto paginatedList, string nameFilter)
        {
            var list = await _allergenRepository
                .GetFilteredList(
                paginatedList.PageNumber,
                paginatedList.SortField,
                paginatedList.SortOrder,
                paginatedList.PageSize,
                nameFilter)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<AllergenDto>>(list);

        }
    }
}
