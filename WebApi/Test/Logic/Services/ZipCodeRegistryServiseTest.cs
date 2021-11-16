using AutoMapper;
using Data.Repositories;
using Logic.DataTransferObjects;
using Logic.Mapping;
using Logic.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Test.Helpers.Data;
using Xunit;

namespace Test.Logic.Services
{
    public class ZipCodeRegistryServiseTest: IClassFixture<ZipCodeRegistrySeedDataFixture>
    {
        ZipCodeRegistrySeedDataFixture _fixture;
        private readonly ZipCodeRegistryService _sut;
        private readonly IZipCodeRegistryRepository _repo;
        private static IMapper _mapper;

        public ZipCodeRegistryServiseTest(ZipCodeRegistrySeedDataFixture fixture)
        {
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
            _repo = new ZipCodeRegistryRepository(_fixture.MainDbContext);
            _sut = new ZipCodeRegistryService(_repo, _mapper);
        }
        [Fact]
        public async Task Create_ShouldReturnTrue()
        {
            //Arrange
            var testData = new ZipCodeRegistryDto
            {
                Id = 0,
                Zip = "2345AJ",
                Date = DateTime.Now
            };

            //Act
            var zip = await _sut.Create(testData).ConfigureAwait(false);

            //Assert
            Assert.True(zip);
        }
    }
}
