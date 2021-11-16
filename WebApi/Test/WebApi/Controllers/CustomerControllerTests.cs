using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Moq;
using WebApi.Controllers;
using Xunit;

namespace Test.WebApi.Controllers
{
    public class CustomerControllerTests
    {
        private readonly CustomerController _sut;
        private readonly Mock<ICustomerService> _customerServiceMock = new Mock<ICustomerService>();
        private readonly Mock<IEmailService> _emailServiceMock = new Mock<IEmailService>();


        public CustomerControllerTests()
        {
            _sut = new CustomerController(_customerServiceMock.Object, _emailServiceMock.Object);
        }

        [Fact]
        public async Task Get_ShouldReturnCustomer_IfCustomerExists()
        {
            // Arrange
            var customerId = 1;
            var customerEmail = "test@customer.nl";
            var customerZip = "2311AB";
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
            _customerServiceMock.Setup(x => x.GetById(customerId)).ReturnsAsync(customer1);

            // Act
            var customer = await _sut.Get(customerId);
            var okCustomer = customer as OkObjectResult;

            // Assert
            Assert.NotNull(okCustomer);
            Assert.Equal(200, okCustomer.StatusCode);
        }

        [Fact]
        public async Task Get_ShouldReturnNotFound_IfCustomerDoesNotExist()
        {
            // Arrange
            _customerServiceMock
                .Setup(x => x.GetById(It.IsAny<int>()))
                .ReturnsAsync(() => null);

            // Act
            var customerId = new Random().Next();
            var customer = await _sut.Get(customerId);
            var statusCustomer = (IStatusCodeActionResult)customer;

            // Assert
            Assert.Equal(404, statusCustomer.StatusCode);

        }


        [Fact]
        public async Task GetAll_ShouldReturnOKCustomerList_IfCustomersExist()
        {
            // Arrange
            var customerId = 1;
            var customerEmail = "test@customer.nl";
            var customerZip = "2311AB";
            var customerDate = DateTime.Now;
            var customerRange = true;
            var customerList = new List<CustomerDto>
            { new CustomerDto
                {
                    Id = customerId,
                    Email = customerEmail,
                    Zipcode = customerZip,
                    Date = customerDate,
                    IsDeliveryRange = customerRange
                }, new CustomerDto
                {
                    Id = 2,
                    Email = customerEmail,
                    Zipcode = customerZip,
                    Date = customerDate,
                    IsDeliveryRange = customerRange

                }
             };
            _customerServiceMock
                .Setup(x => x.GetAll())
                .ReturnsAsync(() => customerList);

            // Act
            var customer = await _sut.GetAll();
            var okCustomer = customer as OkObjectResult;

            // Assert
            Assert.NotNull(okCustomer);
            Assert.Equal(customerList, okCustomer.Value);
            Assert.Equal(200, okCustomer.StatusCode);
        }
        [Fact]
        public async Task Create_ShouldReturnTrue_IfSuccessful()
        {
            // Arrange
            var customerId = 1;
            var customerEmail = "test@customer.nl";
            var customerZip = "2311AB";
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
            _customerServiceMock.Setup(x => x.Create(customer1)).ReturnsAsync(() => true);

            // Act
            var customer = await _sut.Create(customer1);
            var okCustomer = customer as OkObjectResult;

            // Assert
            Assert.Equal(200, okCustomer.StatusCode);
        }

        /*
        [Fact]
        public async Task Create_ShouldReturnFalse_IfFailed()
        {
            // Arrange
            var customerId = 1;
            var customerEmail = "test@customer.nl";
            var customerZip = "0311AB";
            var customerDate = DateTime.Now;
            var customerRange = true;
            var customer1 = new CustomerDto
            {
                //Id = customerId,
                //Email = customerEmail,
                //Zipcode = customerZip,
                //Date = customerDate,
                //IsDeliveryRange = customerRange

            };
            //_customerRepoMock.Setup(x => x.Create(new Customer{})).ReturnsAsync(false);

            // Act
            var customer = await _sut.Create(customer1);

            // Assert
            //Assert.False(customer);
        }
        */
    }
}