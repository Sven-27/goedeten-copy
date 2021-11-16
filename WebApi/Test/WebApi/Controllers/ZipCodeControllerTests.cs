using AutoMapper;
using Data.Repositories;
using Logic.DataTransferObjects;
using Logic.Mapping;
using Logic.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Configuration;
using Moq;
using System;
using System.Threading.Tasks;
using CrossCuttingConcerns.Settings;
using Microsoft.Extensions.Options;
using Test.Helpers.Data;
using WebApi.Controllers;
using Xunit;

namespace Test.WebApi.Controllers
{
    [Collection("ZipCodeTestCollection")]
    public class ZipCodeControllerTests

    {
        private readonly ZipCodeController _sut;
        private readonly IZipCodeService _service;
        private readonly IZipCodeRepository _repo;
       // private readonly IConfiguration _configuration;


        ZipCodeSeedDataFixtureCollection _fixture;

        private static IMapper _mapper;

        public ZipCodeControllerTests(ZipCodeSeedDataFixtureCollection fixture)
        {
            IOptions<AppSettings> appSettings = new OptionsWrapper<AppSettings>(new AppSettings());
            _fixture = fixture;

            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddProfile(new MappingProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }

            _repo = new ZipCodeRepository(_fixture.MainDbContext);
            _service = new ZipCodeService(_repo, _mapper, appSettings);
            _sut = new ZipCodeController(_service);
        }

        [Fact]
        public async Task Get_ShouldReturnOk_IfItExists()
        {
            // Arrange

            // Act
            var resp = await _sut.Get(1);
            var okResp = resp as OkObjectResult;
            //Assert
            Assert.NotNull(resp);
            Assert.Equal(200, okResp.StatusCode);
        }
        [Fact]
        public async Task Get_ShouldReturnNotFound()
        {
            // Arrange

            // Act
            var resp = await _sut.Get(50);
            var statusCodeResult = (IStatusCodeActionResult)resp;

            //Assert
            Assert.Equal(404, statusCodeResult.StatusCode);

        }
        [Fact]
        public async Task GetAll_ShouldReturnOk_()
        {
            // Arrange

            // Act
            var resp = await _sut.GetAll();
            var okResp = resp as OkObjectResult;
            //Assert
            Assert.NotNull(resp);
            Assert.Equal(200, okResp.StatusCode);
        }

        [Fact]
        public async Task GetByZip_ShouldReturnOk_True_IfItExists()
        {
            // Arrange

            // Act
            var resp = await _sut.GetByZip("6137");
            var okResp = resp as OkObjectResult;
            //Assert
            Assert.NotNull(resp);
            Assert.Equal(200, okResp.StatusCode);
            Assert.Equal(true, okResp.Value);
        }
        [Fact]
        public async Task GetByZip_ShouldReturnOk_False_IfItDoesntExist()
        {
            // Arrange

            // Act
            var resp = await _sut.GetByZip("6139");
            var okResp = resp as OkObjectResult;
            //Assert
            Assert.NotNull(resp);
            Assert.Equal(200, okResp.StatusCode);
            Assert.Equal(false, okResp.Value);
        }


        [Fact]
        public async Task Create_ShouldReturnOk_True()
        {
            // Arrange
            var testRequest = new ZipCodeDto
            {
                Id = 0,
                Zip = "6034",
                LocationName = "'s-Gravenhage",
                Active = true
            };

            // Act
            var resp = await _sut.Create(testRequest);
            var okResp = resp as OkObjectResult;
            //Assert
            Assert.NotNull(resp);
            Assert.Equal(200, okResp.StatusCode);

        }

        [Fact]
        public async Task Create_ShouldReturnBadRequest_ValidationError()
        {
            // Arrange
            var testRequest = new ZipCodeDto
            {
                Id = 0,
                Zip = "xxx",
                LocationName = "'s-Gravenhage",
                Active = true
            };

            // Act
            _sut.ModelState.AddModelError("", "One or more validation errors occurred.");

            var result = await _sut.Create(testRequest) as BadRequestObjectResult;

            //Assert
            Assert.Equal(400, result.StatusCode);
            Assert.Equal(false, result.Value);
        }

        [Fact]
        public async Task Delete_ShouldReturnOK_True_ItsExist()
        {
            // Arrange


            // Act
            var result = await _sut.Delete(5) as OkObjectResult;

            //Assert
            Assert.Equal(200, result.StatusCode);
            Assert.Equal(true, result.Value);
        }

        [Fact]
        public async Task Delete_ShouldReturnBadRequest_False_ItsNotExsist()
        {
            // Arrange

            // Act
            var result = await _sut.Delete(55) as BadRequestObjectResult;

            //Assert
            Assert.Equal(400, result.StatusCode);
            Assert.Equal(false, result.Value);
        }

        [Fact]
        public async Task Update_ShouldReturnOK_True()
        {

            //Arrange
            var testZip = new ZipCodeDto
            {
                Id = 9,
                Zip = "9876",
                LocationName = "Holland",
                Active = true
            };


            // Act
            var result = await _sut.Update(testZip).ConfigureAwait(false) as OkObjectResult;
            var updatedZip = await _repo.GetByIdWithTracking(testZip.Id).ConfigureAwait(false);

            //Assert
            Assert.Equal(200, result.StatusCode);
            Assert.Equal(true, result.Value);
            Assert.Equal("Holland", updatedZip.LocationName);
            Assert.Equal("9876", updatedZip.Zip);


        }



    }
}
