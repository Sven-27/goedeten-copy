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
    public interface IIngredientService
    {
        Task<IngredientDto> GetById(int ingredientId);
        Task<IngredientDto> GetByIdWithTracking(int ingredientId);
        Task<List<IngredientDto>> GetAll();
        Task<PaginatedList<IngredientDto>> GetList(PaginatedListDto paginatedList);

        Task<bool> Create(IngredientDto ingredient);
        Task<bool> Update(IngredientDto entity);
        Task<bool> Delete(int ingredientId);
        Task<bool> CreateBundle(List<IngredientDto> entityList);
    }

    public class IngredientService : IIngredientService
    {
        private readonly IIngredientRepository _ingredientRepository;
        private readonly IMapper _mapper;

        public IngredientService(
            IIngredientRepository ingredientRepository,
            IMapper mapper)
        {
            this._ingredientRepository = ingredientRepository;
            _mapper = mapper;
        }

        public async Task<IngredientDto> GetById(int id)
        {
            var ingredient = await _ingredientRepository
                .GetById(id)
                .ConfigureAwait(false);
            return ingredient != null ? _mapper.Map<IngredientDto>(ingredient) : null;   
        }

        public async Task<IngredientDto> GetByIdWithTracking(int id)
        {
            var ingredient = await _ingredientRepository
                .GetByIdWithTracking(id)
                .ConfigureAwait(false);
            return ingredient != null ? _mapper.Map<IngredientDto>(ingredient) : null;
        }

        public async Task<List<IngredientDto>> GetAll()
        {
            var ingredients = await _ingredientRepository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<IngredientDto>>(ingredients);
        }


        public async Task<PaginatedList<IngredientDto>> GetList(PaginatedListDto paginatedList)
        {
            var ingredientList = await _ingredientRepository
                .GetList(
                paginatedList.PageNumber,
                paginatedList.SortField,
                paginatedList.SortOrder,
                paginatedList.PageSize)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<IngredientDto>>(ingredientList);

        }

        public async Task<bool> Create(IngredientDto ingredient)
        {
            
            try
            {
                var newIngredient = _mapper.Map<IngredientDto, Ingredient>(ingredient);
                await _ingredientRepository
                    .Create(newIngredient)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Update(IngredientDto ingredient)
        {
            try
            {
                var updateIngredient = _mapper.Map<IngredientDto, Ingredient>(ingredient);
                await _ingredientRepository
                    .Update(updateIngredient)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Delete(int ingredientId)
        {
            try
            {
                await _ingredientRepository
                    .Delete(ingredientId)
                    .ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> CreateBundle(List<IngredientDto> entityList)
        {
            try
            {
                var newEntityList = _mapper.Map<List<IngredientDto>, List<Ingredient>>(entityList);
                await _ingredientRepository
                    .CreateBundle(newEntityList)
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
