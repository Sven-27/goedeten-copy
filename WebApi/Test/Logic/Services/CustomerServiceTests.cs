using System;
using System.Threading.Tasks;
using AutoMapper;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Logic.Mapping;
using Logic.Services;
using Moq;
using Xunit;

namespace Test.Logic.Services
{
    public class CustomerServiceTests
    {
        private readonly CustomerService _sut;
        private readonly Mock<ICustomerRepository> _customerRepoMock = new Mock<ICustomerRepository>();
        private static IMapper _mapper;

        public CustomerServiceTests()
        {
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MappingProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }
            _sut = new CustomerService(_customerRepoMock.Object, _mapper);

        }

        [Fact]
        public async Task GetById_ShouldReturnCustomer_IfCustomerExists()
        {
            // Arrange
            var customerId = 1;
            var customerEmail = "test@customer.nl";
            var customerZip = "2311AB";
            var customerDate = DateTime.Now;
            var customerRange = true;
            var customer1 = new Customer
            {
                Id = customerId,
                Email = customerEmail,
                Zipcode = customerZip,
                Date = customerDate,
                IsDeliveryRange = customerRange
                
            };
            _customerRepoMock.Setup(x => x.GetById(customerId)).ReturnsAsync(customer1);

            // Act
            var customer = await _sut.GetById(customerId);

            // Assert
            Assert.Equal(customerId, customer.Id);
            Assert.Equal(customerZip, customer.Zipcode);
            Assert.Equal(customerEmail, customer.Email);
        }

        [Fact]
        public async Task GetById_ShouldReturnNull_IfCustomerDoesNotExist()
        {
            // Arrange
            _customerRepoMock.Setup(x => x.GetById(It.IsAny<int>())).ReturnsAsync(() => null);

            // Act
            var customerId = new Random().Next();
            var customer = await _sut.GetById(customerId);

            // Assert
            Assert.Null(customer);

        }

        [Fact]
        public async Task Create_ShouldReturnTrue_IfSuccessfull()
        {
            // Arrange
            var customerId = 1;
            var customerEmail = "test@customer.nl";
            //var customerEmail1 = "testing@customer.nl";
            var customerZip = "1311AB";
            var customerDate = DateTime.Now;
            var customerRange = true;
            var customer1 = new CustomerDto
            {
                Id = customerId,
                Email = customerEmail,
                Zipcode = customerZip,
                Date = customerDate,
                IsDeliveryRange = customerRange

            };
            var customerReturn = new Customer
            {
                Id = customerId,
                Email = customerEmail,
                Zipcode = customerZip,
                Date = customerDate,
                IsDeliveryRange = customerRange

            };
            _customerRepoMock.Setup(x => x.Create(It.IsAny<Customer>())).ReturnsAsync(customerReturn);
            // _customerRepoMock.Setup(x => x.Create(It.IsAny<Customer>())).ReturnsAsync<Customer>(c => { if (c == customerReturn) return customerReturn; });

            // Act
            var customer = await _sut.Create(customer1);

            // Assert
            Assert.True(customer);
        }
        
        /*
        [Fact]
        public async Task Create_ShouldReturnFalse_IfFailed()
        {
            // Arrange
            var customerCreate = new CustomerDto()
            {
                Id = 10,
                Email = "test@customer.nl",
                Zipcode = "0311AB",
                Date = DateTime.Now,
                IsDeliveryRange = true

            };
            // _customerRepoMock.Setup(x => x.Create(It.IsAny<Customer>())).ThrowsAsync(false);

            // Act
            var customer = await _sut.Create(customerCreate);

            // Assert
            Assert.False(customer);
        }
        */
    }
}