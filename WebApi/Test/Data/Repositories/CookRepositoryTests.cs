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
    public class CookRepositoryTests: IClassFixture<CookSeedDataFixture>
    {
        private readonly CookSeedDataFixture _cookSeedDataFixture;
        private CookRepository _sut;

        public CookRepositoryTests(CookSeedDataFixture cookSeedDataFixture)
        {
            _cookSeedDataFixture = cookSeedDataFixture;
        }

        [Fact]
        public async Task GetById_ShouldReturnCook_IfCookExists()
        {
            _sut = new CookRepository(_cookSeedDataFixture.MainDbContext);
            var cook = await _sut.GetById(1).ConfigureAwait(false);

            Assert.Equal(1, cook.Id);
        }

    }
}
