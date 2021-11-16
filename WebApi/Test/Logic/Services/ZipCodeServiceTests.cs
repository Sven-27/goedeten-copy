using AutoMapper;
using Data.Repositories;
using Logic.DataTransferObjects;
using Logic.Mapping;
using Logic.Services;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using CrossCuttingConcerns.Settings;
using Microsoft.Extensions.Options;
using Test.Helpers.Data;
using Xunit;

namespace Test.Logic.Services
{

    [Collection("ZipCodeTestCollection")]
    public class ZipCodeServiceTests  //:IClassFixture<ZipCodeSeedDataFixture>
    {
        ZipCodeSeedDataFixtureCollection _fixture;
        private readonly ZipCodeService _sut;
        private readonly IZipCodeRepository _repo;
        private static IMapper _mapper;


        public ZipCodeServiceTests(ZipCodeSeedDataFixtureCollection fixture)
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

            //_sut = new ZipCodeService(_zipCodeRepoMock.Object, _mapper);
            _sut = new ZipCodeService(_repo, _mapper, appSettings);
        }


        [Fact]
        public async Task GetByZip_ShouldReturnZipCode_IfZipCodeExists()
        {
            // Arrange    
            var testZip = _repo.GetById(6).Result;


            //Act
            var zipCode = await _sut.GetByZip(testZip.Zip);

            //Assert
            Assert.True(zipCode);



        }

        [Fact]
        public async Task GetByZip_ShouldReturnNull_IfZipCodeDoesNotExists()
        {
            //Arrange


            //Act
            var zipCode = await _sut.GetByZip("");

            //Assert
            Assert.False(zipCode);



        }
        [Fact]
        public async Task Create_ShouldReturnCreatedObject()
        {
            //Arrange
            var testZip = new ZipCodeDto
            {
                Id = 0,
                Zip = "2345",
                LocationName = "'s-Gravenhage",
                Active = true
            };

            //Act
            var zip = await _sut.Create(testZip).ConfigureAwait(false);

            //Assert
            Assert.Equal(testZip.Zip, zip.Zip);
        }



        [Fact]
        public async Task Update_ShouldReturnTrue()
        {
            //Arrange

            var testZip = await _repo.GetByIdWithTracking(8).ConfigureAwait(false);

            testZip.Zip = "9876"; // ZipCode ( has to be mapped into) => ZipCodeDto

            //Act
            var zipCode = await _sut.Update(_mapper.Map<ZipCodeDto>(testZip)).ConfigureAwait(false);

            var checkZip = await _repo.GetByIdWithTracking(8).ConfigureAwait(false);
            //Assert
            Assert.True(zipCode);
            Assert.Equal("9876", checkZip.Zip);

        }

        [Fact]
        public async Task Delete_ShouldReturnNull()
        {
            //Arrange

            //Act                               
            var result = await _sut.Delete(10).ConfigureAwait(false);

            //Assert 
            Assert.True(result);
        }


    }
}