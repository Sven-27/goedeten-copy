using AutoMapper;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Services
{
    public interface IZipCodeRegistryService
    {
        Task<bool> GetByZip(string zip);
        Task<ZipCodeRegistryDto> GetById(int zipId);
        Task<List<ZipCodeRegistryDto>> GetAll();
        Task<bool> Create(ZipCodeRegistryDto zipCode);
        Task<bool> Delete(int zipId);
        Task<bool> Update(ZipCodeRegistryDto entity); //put

    }

    public class ZipCodeRegistryService : IZipCodeRegistryService

    {
        private readonly IZipCodeRegistryRepository _repo;
        private readonly IMapper _mapper;


        public ZipCodeRegistryService(IZipCodeRegistryRepository repository, IMapper mapper)
        {
            _repo = repository;
            _mapper = mapper;
        }
        public async Task<bool> GetByZip(string zip)
        {
            var zipCode = await _repo.GetByZip(zip).ConfigureAwait(false);

            return zipCode != null ? true : false;
        }

        public async Task<List<ZipCodeRegistryDto>> GetAll()

        {
            var zipCodeList = await _repo
               .GetAll()
               .ToListAsync()
               .ConfigureAwait(false);

            return _mapper.Map<List<ZipCodeRegistryDto>>(zipCodeList);
        }
        public async Task<bool> Create(ZipCodeRegistryDto zipCode)
        {
            try
            {
                var newZipCode = _mapper.Map<ZipCodeRegistryDto, ZipCodeRegistry>(zipCode);
                await _repo.Create(newZipCode).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> Delete(int zipId)
        {
            try
            {
                await _repo.Delete(zipId).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }


        public async Task<ZipCodeRegistryDto> GetById(int zipId)
        {
            var zipCode = await _repo.GetById(zipId).ConfigureAwait(false);
            return zipCode != null ? _mapper.Map<ZipCodeRegistryDto>(zipCode) : null;
        }

        public async Task<bool> Update(ZipCodeRegistryDto zipCodeRegistry)
        {
            try
            {

                var updateZipCodeRegistry = _mapper.Map<ZipCodeRegistryDto, ZipCodeRegistry>(zipCodeRegistry);
                await _repo.Update(updateZipCodeRegistry).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }

        }
    }

}