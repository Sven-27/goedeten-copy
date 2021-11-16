using AutoMapper;
using Data.DataObjects;
using Data.Repositories;
using Logic.Mapping;
using Logic.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Logic.DataTransferObjects;
using Test.Helpers.Data;
using WebApi.Controllers;
using Xunit;
using System.Diagnostics;

namespace Test
{
    public class SharedDatabaseTest : IClassFixture<SharedDatabaseFixture>
    {
        public SharedDatabaseFixture Fixture { get; set; }

        private readonly CustomerRepository _repo;
        private readonly CustomerService _service;
        private readonly Mock<IEmailService> _emailServiceMock = new Mock<IEmailService>();
        private readonly CustomerController _controller;
        private static IMapper _mapper;

        public SharedDatabaseTest(SharedDatabaseFixture fixture) 
        {
            Fixture = fixture;

            if(_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MappingProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }

            _repo = new CustomerRepository(Fixture.MainDbContext);
            _service = new CustomerService(_repo, _mapper);
            _controller = new CustomerController(_service, _emailServiceMock.Object);
        }

        [Fact]
        public async Task GetById_ShouldReturnOk_IfCustomerExists()
        {
            //Arrange
            //var customer = new Customer
            //{
            //    Email = "this@email.nl",
            //    Date = DateTime.Now,
            //    Id = 1,
            //    IsDeliveryRange = true,
            //    Zipcode = "1234AB"
            //};

            //Act
            //var result = await _controller.Get(customer.Id).ConfigureAwait(false);
            var result = await _controller.Get(1).ConfigureAwait(false);
            var okResult = result as OkObjectResult;

            //Assert
            Assert.NotNull(result);
            Assert.Equal(200, okResult.StatusCode);
        }

        [Fact]
        public async Task Create_ShouldReturnFalse_ifFailed()
        {
            // Arrange 
            var customer = new CustomerDto()
            {
                Email = "home@email.nl",
                Date = DateTime.Now,
                Id = 1,
                IsDeliveryRange = true,
                Zipcode = "5555EE"
            };
            
            //Act
            var result    = await _controller.Create(customer).ConfigureAwait(false);
            var badResult = result as BadRequestObjectResult;
            
            //Assert
            Assert.NotNull(result);
            Assert.Equal(400, badResult.StatusCode);
            Assert.Equal(false, badResult.Value);
        }
        
        [Fact]
        public async Task CreateShouldReturnTrue_ifSuccessful()
        {
            // Arrange 
            var customer = new CustomerDto()
            {
                Email = "thing@email.nl",
                Date = DateTime.Now,
                IsDeliveryRange = true,
                Zipcode = "4444DD"
            };
            
            //Act
            var result    = await _controller.Create(customer).ConfigureAwait(false);
            var okResult = result as OkObjectResult;
            
            //Assert
            Assert.NotNull(result);
            if (okResult != null)
            {
                Assert.Equal(200, okResult.StatusCode);
                Assert.Equal(true, okResult.Value);
            }
        }
        
        [Fact] 
        public async Task UpdateShouldReturnTrue_ifSuccessful()
        {
            // Arrange 
            
             CustomerDto customerUpdate = new CustomerDto
            {
                Id = 1,
                Email = "update@email.nl",
                Date = DateTime.Now,
                IsDeliveryRange = true,
                Zipcode = "6432AA"
            };

            //Act
            
            var resp = await _controller.Update(customerUpdate).ConfigureAwait(false);
            var respOk = resp as OkObjectResult;

            var updatedCustomer = await _repo.GetById(customerUpdate.Id).ConfigureAwait(false);

            //Assert
            Assert.Equal("update@email.nl", updatedCustomer.Email);
            Assert.Equal("6432AA", updatedCustomer.Zipcode);
            Assert.Equal(200, respOk.StatusCode);
            Assert.Equal(true, respOk.Value);
           


        }
    }
}
