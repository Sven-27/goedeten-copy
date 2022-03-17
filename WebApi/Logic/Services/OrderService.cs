using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CrossCuttingConcerns.Enums;
using CrossCuttingConcerns.PagingSorting;
using CrossCuttingConcerns.Settings;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using OmniKassa;
using OmniKassa.Exceptions;
using OmniKassa.Model;
using OmniKassa.Model.Enums;
using OmniKassa.Model.Order;
using OmniKassa.Model.Response;
using OmniKassa.Model.Response.Notification;
using Environment = OmniKassa.Environment;

namespace Logic.Services
{
    public interface IOrderService
    {
        Task<RedirectResult> Create(OrderEasyDto data);

        Task<RedirectResult> PlaceOrder(OrderDto order);
        Task<OrderDto> GetById(int id);
        Task<List<OrderDto>> GetAll();
        Task<List<OrderDeliveryDto>> GetAllDeliveries();
        Task<bool> DeleteOrder(int orderId);
        Task<bool> RetrieveUpdates(ApiNotification notification);

        Task<bool> Update(OrderDto order);
    }

    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderDeliveryRepository _orderDeliveryRepository;
        private readonly IOrderDishRepository _orderDishRepository;
        private readonly IOrderTransactionRepository _orderTransactionRepository;
        private readonly IDishAvailabilityRepository _dishAvailabilityRepository;
        private readonly IEmailService _emailService;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly string SIGNING_KEY;
        private readonly string TOKEN;
        private readonly string RETURN_URL;
        private static Endpoint omniKassa;

        public OrderService(IOrderRepository orderRepository, IOrderDeliveryRepository orderDeliveryrepository,
            IOrderDishRepository orderDishRepository, IOrderTransactionRepository orderTransactionRepository,
            IDishAvailabilityRepository dishAvailabilityRepository, IMapper mapper,
            IOptions<AppSettings> appSettings, IEmailService emailService)
        {
            _orderRepository = orderRepository;
            _orderDeliveryRepository = orderDeliveryrepository;
            _orderDishRepository = orderDishRepository;
            _orderTransactionRepository = orderTransactionRepository;
            _dishAvailabilityRepository = dishAvailabilityRepository;
            _emailService = emailService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            SIGNING_KEY = _appSettings.SigningKey;
            TOKEN = _appSettings.Token;
            RETURN_URL = _appSettings.ReturnUrl;

            if (omniKassa == null) omniKassa = Endpoint.Create(Environment.SANDBOX, SIGNING_KEY, TOKEN);
        }

        public async Task<List<OrderDto>> GetAll()
        {
            var results = await _orderRepository
                .GetAll()
                .OrderByDescending("id")
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<OrderDto>>(results);
        }

        public async Task<List<OrderDeliveryDto>> GetAllDeliveries()
        {
            var results = await _orderDeliveryRepository
                .GetAll()
                .ToListAsync()
                .ConfigureAwait(false);

            return _mapper.Map<List<OrderDeliveryDto>>(results);
        }

        public async Task<OrderDto> GetById(int id)
        {
            var result = await _orderRepository
                .GetById(id)
                .ConfigureAwait(false);
            return result != null ? _mapper.Map<OrderDto>(result) : null;
        }

        public async Task<RedirectResult> Create(OrderEasyDto data)
        {
            var listUpdates = data.Cart
                .Select(item => new DishAvailabilityOrder
                {
                    Id = item.Dish.Id,
                    Quantity = item.Quantity
                })
                .ToList();

            var updateIds = listUpdates.Select(d => d.Id).ToList();
            if (!updateIds.Any())
            {
                return new RedirectResult("nosupply");
            }

            try
            {
                var dishAvailabilities = await _dishAvailabilityRepository
                    .GetAll()
                    .Where(d => updateIds.Contains(d.Id))
                    .ToListAsync()
                    .ConfigureAwait(false);

                foreach (var listUpdate in listUpdates)
                {
                    var dishAvailability = dishAvailabilities.SingleOrDefault(d => d.Id == listUpdate.Id);
                    if (dishAvailability != null)
                    {
                        if (dishAvailability.CurrentQuantity - listUpdate.Quantity >= 0)
                        {
                            dishAvailability.CurrentQuantity -= listUpdate.Quantity;
                        }
                        else
                        {
                            continue;
                        }
                    }

                    await _dishAvailabilityRepository.Update(dishAvailability).ConfigureAwait(false);
                }
                

                try
                {
                    var sum_dishes = data.Cart.Sum(c => c.Quantity * c.Price);
                    var deliveries = data.Cart.GroupBy(c => c.Dish.Date).ToList().Count;
                    var orderTotalPrice = sum_dishes + deliveries * 2.5m;
                    var deliveryList = data.Cart
                        .GroupBy(c => c.Dish.Date)
                        .Select(t =>
                            new
                            {
                                DeliveryDate = t.Key,
                                DeliveryPrice = 2.50m,
                                Price = t.Sum(u => u.Price * u.Quantity)
                            }).ToList();
                    var orderDeliveries = new List<OrderDeliveryDto>();
                    foreach (var item1 in deliveryList)
                    {
                        var dishesByDelivery = data.Cart.Where(c => c.Dish.Date == item1.DeliveryDate).ToList();
                        var newDelivery = new OrderDeliveryDto
                        {
                            DeliveryPrice = item1.DeliveryPrice,
                            DeliveryDate = item1.DeliveryDate,
                            TotalPrice = item1.Price + item1.DeliveryPrice,
                            DishOrders = _mapper.Map<List<OrderCartDto>, List<OrderDishDto>>(dishesByDelivery)
                        };
                        orderDeliveries.Add(newDelivery);
                    }

                    ;
                    var newOrder = new OrderDto
                    {
                        OrderDate = data.OrderDate,
                        TotalAmount = orderTotalPrice,
                        FirstName = data.FirstName,
                        LastName = data.LastName,
                        Street = data.Street,
                        HouseNumber = data.HouseNumber,
                        AddHouseNumber = data.AddHouseNumber,
                        Zipcode = data.ZipCode,
                        City = data.City,
                        Email = data.Email,
                        Phone = data.Phone,
                        Details = data.Details,
                        Dietdetails = data.Dietdetails,
                        Status = OrderStatus.New,
                        Deliveries = orderDeliveries,
                        Transactions = null
                    };
                    var mapNewOrder = _mapper.Map<OrderDto, Order>(newOrder);
                    var res = await _orderRepository.Create(mapNewOrder).ConfigureAwait(false);
                    if (res != null)
                    {
                        var partOfNumber = res.Id < 99999
                            ? res.Id.ToString().Trim()
                            : res.Id.ToString().Substring(res.Id.ToString().Length - 5);
                        res.OrderNumber = res.OrderDate.ToString("yyMMdd") + partOfNumber.PadLeft(5, '0');
                        await _orderRepository.Update(res).ConfigureAwait(false);
                        // orderNumber is saved         
                        //return _mapper.Map<Order, OrderDto>(res);
                        var finalres = _mapper.Map<Order, OrderDto>(res);
                        var placeOrder = await PlaceOrder(finalres);
                        //return final result;
                        return placeOrder;
                    }
                }
                catch (Exception ex)
                {
                    var undoDishAvailabilities = await _dishAvailabilityRepository
                        .GetAll()
                        .Where(d => updateIds.Contains(d.Id))
                        .ToListAsync()
                        .ConfigureAwait(false);

                    foreach (var listUpdate in listUpdates)
                    {
                        var dishAvailability = undoDishAvailabilities.SingleOrDefault(d => d.Id == listUpdate.Id);
                        if (dishAvailability != null)
                        {
                            dishAvailability.CurrentQuantity += listUpdate.Quantity;
                        }

                        await _dishAvailabilityRepository.Update(dishAvailability).ConfigureAwait(false);
                    }
                    Debug.WriteLine(ex.Message);
                    throw new Exception(ex.Message);
                }

                //}
                // await _dishAvailabilityRepository.Update(listUpdates, false);
                return new RedirectResult("nosupply");
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<RedirectResult> PlaceOrder(OrderDto order)
        {
            try
            {
                var merchantOrder = GetOrder(order);
                var response = await omniKassa.Announce(merchantOrder);
                return new RedirectResult(response.RedirectUrl);
            }
            catch (RabobankSdkException ex)
            {
                Debug.WriteLine(ex.Message);
                throw new Exception(ex.Message);
                return null;
            }
        }

        public async Task<bool> RetrieveUpdates(ApiNotification notification)
        {
            try
            {
                MerchantOrderStatusResponse response = null;
                do
                {
                    response = await omniKassa.RetrieveAnnouncement(notification);
                    // string str_response =  Newtonsoft.Json.JsonConvert.SerializeObject(response);
                    // await _emailService.TestEmail("f.vandergeld@bee-international.nl", "Response", str_response).ConfigureAwait(false);
                    var results = _mapper.Map<List<MerchantOrderResult>, List<OrderTransaction>>(response.OrderResults);
                    // string str_results =  Newtonsoft.Json.JsonConvert.SerializeObject(results);
                    // await _emailService.TestEmail("f.vandergeld@bee-international.nl", "Results", str_results).ConfigureAwait(false);
                    var addTransactions = await _orderRepository.AddTransactions(results);
                    //string str_addTransactions =  Newtonsoft.Json.JsonConvert.SerializeObject(addTransactions);
                    //await _emailService.TestEmail("f.vandergeld@bee-international.nl", "Transactions", str_addTransactions).ConfigureAwait(false);
                } while (response.MoreOrderResultsAvailable);
            }
            catch (RabobankSdkException ex)
            {
                Debug.WriteLine(ex.Message);
                var str_response = JsonConvert.SerializeObject(ex.Message);
                await _emailService
                    .TestEmail("f.vandergeld@bee-international.nl", "Error in RetrieveUpdates", str_response)
                    .ConfigureAwait(false);
                return false;
            }

            return true;
        }


        public async Task<bool> DeleteOrder(int orderId)
        {
            try
            {
                await _orderRepository.Delete(orderId).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public MerchantOrder GetOrder(OrderDto orderDto)
        {
            // Money itemAmount = Money.FromDecimal(Currency.EUR, 2.00m);
            // Money itemTax = Money.FromDecimal(Currency.EUR, 0.49m);

            // OrderItem orderItem = new OrderItem.Builder()
            //         .WithId("1")
            //         .WithQuantity(1)
            //         .WithName("Test product")
            //         .WithDescription("Description")
            //         .WithAmount(Money.FromDecimal(Currency.EUR, 10m))
            //         .WithTax(Money.FromDecimal(Currency.EUR, 1m))
            //         .WithItemCategory(ItemCategory.PHYSICAL)
            //         .WithVatCategory(VatCategory.LOW)
            //         .Build();

            var customerInformation = new CustomerInformation.Builder()
                .WithTelephoneNumber(orderDto.Phone)
                // .WithInitials("J.D.")
                // .WithGender(Gender.M)
                .WithEmailAddress(orderDto.Email)
                // .WithDateOfBirth("20-03-1987")
                .Build();

            var shippingDetails = new Address.Builder()
                .WithFirstName(orderDto.FirstName)
                .WithLastName(orderDto.LastName)
                .WithStreet(orderDto.Street)
                .WithHouseNumber(orderDto.HouseNumber.ToString())
                .WithHouseNumberAddition(orderDto.AddHouseNumber)
                .WithPostalCode(orderDto.Zipcode)
                .WithCity(orderDto.City)
                .WithCountryCode(CountryCode.NL)
                .Build();

            // Address billingDetails = new Address.Builder()
            //         .WithFirstName("John")
            //         .WithLastName("Doe")
            //         .WithStreet("Factuurstraat")
            //         .WithHouseNumber("5")
            //         .WithHouseNumberAddition("a")
            //         .WithPostalCode("1234AB")
            //         .WithCity("Haarlem")
            //         .WithCountryCode(CountryCode.NL)
            //         .Build();

            var order = new MerchantOrder.Builder()
                .WithMerchantOrderId(orderDto.OrderNumber + "O" + orderDto.Id)
                //.WithDescription("An example description")
                //.WithOrderItems(new List<OrderItem>(new OrderItem[] { orderItem }))
                .WithAmount(Money.FromDecimal(Currency.EUR, orderDto.TotalAmount))
                .WithCustomerInformation(customerInformation)
                .WithShippingDetail(shippingDetails)
                //.WithBillingDetail(billingDetails)
                .WithLanguage(Language.NL)
                .WithMerchantReturnURL(RETURN_URL)
                .WithPaymentBrand(PaymentBrand.IDEAL)
                .WithPaymentBrandForce(PaymentBrandForce.FORCE_ONCE)
                // .WithInitiatingParty("LIGHTSPEED")
                .Build();

            return order;
        }

        public async Task<bool> Update(OrderDto order)
        {
            var mappedOrder = _mapper.Map<OrderDto, Order>(order);
            try
            {
                await _orderRepository.Update(mappedOrder);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }

            return true;
        }
    }
}