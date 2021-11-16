using System.Collections.Generic;
using System.Threading.Tasks;
using Data.DataObjects;
using Data.Repositories;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using Moq;
using Test.Helpers.Data;
using Xunit;

namespace Test.Data.Repositories
{
    [Collection("ZipCodeTestCollection")]
    public class ZipCodeRepositoryTests //: IClassFixture<ZipCodeSeedDataFixture1>
    {
        readonly ZipCodeSeedDataFixtureCollection _zipCodeSeedDataFixture;
        private ZipCodeRepository _sut;

        public ZipCodeRepositoryTests(ZipCodeSeedDataFixtureCollection fixture)
        {
            _zipCodeSeedDataFixture = fixture ;
            _sut = new ZipCodeRepository(_zipCodeSeedDataFixture.MainDbContext);
        }


        [Fact]
        public async Task GetById_ShouldReturnZipCode_IfItExists()
        {
            //Act
            var zipCode = await _sut.GetById(1).ConfigureAwait(false);

            //Assert
            Assert.Equal(1, zipCode.Id);
        }

        [Fact]
        public async Task GetByZip_ShouldReturnZipCode_IfItExists()
        {
            var zipCode = await _sut.GetByZip("6039").ConfigureAwait(false);
            Assert.Equal("6039", zipCode.Zip);
        }

        [Fact]
        public async Task Create_ShouldReturnCreatedObject()
        {
            //Arrange
            var testZip = new ZipCode
            {
                Id = 0,
                Zip = "5555",
                LocationName = "Geleen",
                Active = true
            };

            //Act
            await _sut.Create(testZip).ConfigureAwait(false) ;
            var zipCode = await _sut.GetById(11).ConfigureAwait(false);

            //Assert
            Assert.Equal(11, zipCode.Id);
            Assert.Equal("5555", zipCode.Zip);
        }

        [Fact]
        public async Task Update_ShouldReturnUpdatedObject()
        {
            //Arrange
            var testZip = await _sut.GetByIdWithTracking(3).ConfigureAwait(false);
            testZip.Zip = "9876";

            //Act
            await _sut.Update(testZip).ConfigureAwait(false);
            var zipCode = await _sut.GetById(3).ConfigureAwait(false);

            //Assert
            Assert.Equal("9876", zipCode.Zip);

        }
        [Fact]
        public async Task Delete_ShouldReturnNull()
        {
            //Arrange
            //Act                               
            await _sut.Delete(4).ConfigureAwait(false);
            var zipCode = await _sut.GetById(4).ConfigureAwait(false);
            //Assert 
            Assert.Null(zipCode);

        }
    }
}
