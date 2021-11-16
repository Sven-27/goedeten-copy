using System;
using AutoMapper;
using CrossCuttingConcerns.PagingSorting;
using Data.DataObjects;
using Logic.DataTransferObjects;
using OmniKassa.Model.Response;

namespace Logic.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Cooks
            CreateMap<Cook, CookDisplayDto>().ReverseMap();
            CreateMap<Cook, CookDto>().ReverseMap();
            // Dishes
            CreateMap<Dish, DishDisplayDto>().ReverseMap();
            CreateMap<Dish, DishDto>().ReverseMap();
            CreateMap<DishDisplay, DishDto>().ReverseMap();
            CreateMap<Dish, DishDisplay>().ReverseMap();

            // Cuisine
            CreateMap<Cuisine, CuisineDisplayDto>().ReverseMap();
            CreateMap<Cuisine, CuisineDto>().ReverseMap();
            // Allergen
            CreateMap<Allergen, AllergenDto>().ReverseMap();
            // ZipCodes
            CreateMap<ZipCode, ZipCodeDto>().ReverseMap();
            // Customers
            CreateMap<Customer, CustomerDto>().ReverseMap();
            // ZipCodeRegistries
            CreateMap<ZipCodeRegistry, ZipCodeRegistryDto>().ReverseMap();
            // PaginatedList
            CreateMap<PaginatedList<Cook>, PaginatedList<CookDisplayDto>>();
            CreateMap<PaginatedList<Cook>, PaginatedList<CookDto>>().ReverseMap();
            CreateMap<PaginatedList<ZipCode>, PaginatedList<ZipCodeDto>>().ReverseMap();
            CreateMap<PaginatedList<Allergen>, PaginatedList<AllergenDto>>().ReverseMap();
            CreateMap<PaginatedList<DishDisplay>, PaginatedList<DishDto>>().ReverseMap();
            CreateMap<PaginatedList<Dish>, PaginatedList<DishDto>>().ReverseMap();

            // DishAvailability
            CreateMap<DishAvailability, DishAvailabilityDto>().ReverseMap();
            CreateMap<DishAvailabilityDisplay, DishAvailabilityDisplayDto>().ReverseMap();
            CreateMap<DishAvailabilityPlanning, DishAvailabilityPlanningDto>().ReverseMap();

            // CookAvailability
            CreateMap<CookAvailability, CookAvailabilityDto>().ReverseMap();
            CreateMap<CookAvailabilityDisplay, CookAvailabilityDisplayDto>().ReverseMap();
            // Ingredients
            CreateMap<Ingredient, IngredientDto>().ReverseMap();
            //DishCategory
            CreateMap<DishCategory, DishCategoryDto>().ReverseMap();
            // Location
            CreateMap<Location, LocationDto>().ReverseMap();
            //User
            CreateMap<User, UserDto>().ReverseMap();
            //Order
            CreateMap<Order, OrderDto>().ReverseMap();
          
            CreateMap<OrderTransaction, OrderTransactionDto>().ReverseMap();
            CreateMap<OrderDish, OrderDishDto>()
                .ForMember(dest => dest.DishName, opt => opt.MapFrom(src => src.Dish.Name))
                .ForMember(dest => dest.CookName, opt => opt.MapFrom(src => src.Dish.Cook.Name));
            CreateMap<OrderDishDto, OrderDish>();
            CreateMap<OrderDelivery, OrderDeliveryDto>().ReverseMap();
            //VatCategory
            CreateMap<VatCategory, VatCategoryDto>().ReverseMap();

            CreateMap<OrderCartDto, OrderDishDto>()             
                .ForMember(dest => dest.DishId, opt => opt.MapFrom(src => src.Dish.DishId))                
                .ForMember(dest => dest.DishAvailabilityId, opt => opt.MapFrom(src => src.Dish.Id))                
                .ReverseMap();
            
            //MerchantOrder
            CreateMap<MerchantOrderResult, OrderTransaction>()
                .ForMember(dest => dest.OrderId, opt => opt.MapFrom(src => Int32.Parse(src.MerchantOrderId.Split("O", StringSplitOptions.None)[1])))
                .ForMember(dest => dest.TransactionId, opt => opt.MapFrom(src => src.OmnikassaOrderId))
                .ForMember(dest => dest.TransactionStatus, opt => opt.MapFrom(src => src.OrderStatus))
                .ForMember(dest => dest.TransactionDateTime, opt => opt.MapFrom(src => src.OrderStatusDateTime));
        }
    }
}