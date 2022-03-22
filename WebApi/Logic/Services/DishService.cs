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
    public interface IDishService
    {
        Task<DishDto> GetById(int dishId);
        Task<List<DishDisplayDto>> GetAll();
        Task<PaginatedList<DishDto>> GetList(PaginatedListDto paginatedList);
        Task<PaginatedList<DishDto>> GetFilteredList(DishPagedFilterDto paginatedList);
        Task<DishDisplayDto> Create(DishDisplayDto dish);
        Task<bool> Delete(int dishId);
        Task<bool> Update(DishDisplayDto entity); //put

        Task<bool> SetAllergens(int dishId, List<int> allergens);
        Task<bool> SetIngredients(int dishId, List<int> ingredients);
    }

    public class DishService : IDishService
    {
        private readonly IDishRepository _dishRepository;
        private readonly IMapper _mapper;
       

        public DishService(IDishRepository dishRepository,
            IMapper mapper)
        {
            _dishRepository = dishRepository;
            _mapper = mapper;
        }

        public async Task<List<DishDisplayDto>> GetAll()
        {
            var dishList = await _dishRepository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<DishDisplayDto>>(dishList);
        }

        public async Task<PaginatedList<DishDto>> GetList(PaginatedListDto paginatedList)
        {
            var dishList = await _dishRepository
                .GetList(
                    paginatedList.PageNumber,
                    paginatedList.SortField,
                    paginatedList.SortOrder,
                    paginatedList.PageSize)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<DishDto>>(dishList);
        }

        public async Task<PaginatedList<DishDto>> GetFilteredList(DishPagedFilterDto paginatedList)
        {
            var dishList = await _dishRepository
                .GetFilteredList(
                    paginatedList.PageNumber,
                    paginatedList.SortField,
                    paginatedList.SortOrder,
                    paginatedList.PageSize,
                    paginatedList.CategoryFilter,
                    paginatedList.NameFilter,
                    paginatedList.CookFilter,
                    paginatedList.CuisineFilter)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<DishDto>>(dishList);
        }

        public async Task<DishDisplayDto> Create(DishDisplayDto dish)
        {
            try
            {
                var newDish = _mapper.Map<DishDisplayDto, Dish>(dish);
                var result =  await _dishRepository.Create(newDish).ConfigureAwait(false);
                return result != null ? _mapper.Map<DishDisplayDto>(result) : null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }

        public async Task<DishDto> GetById(int dishId)
        {
            var dish = await _dishRepository.GetById(dishId).ConfigureAwait(false);
            return dish != null ? _mapper.Map<DishDto>(dish) : null;
        }


        public async Task<bool> Delete(int dishId)
        {
            try
            {
                await _dishRepository.Delete(dishId).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Update(DishDisplayDto dish)
        {
            try
            {

                var updateDish = _mapper.Map<DishDisplayDto, Dish>(dish);
                await _dishRepository.Update(updateDish).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> SetAllergens(int dishId, List<int> allergens)
        {
            await _dishRepository.SetAllergens(dishId, allergens);
            return true;


        }

        public async Task<bool> SetIngredients(int dishId, List<int> ingredients)
        {
            await _dishRepository.SetIngredients(dishId, ingredients);
            return true;
        }
    }
}