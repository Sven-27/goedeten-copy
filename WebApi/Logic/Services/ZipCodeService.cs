using AutoMapper;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using CrossCuttingConcerns.PagingSorting;
using CrossCuttingConcerns.Settings;
using Newtonsoft.Json;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace Logic.Services
{
    public interface IZipCodeService
    {
        Task<bool> GetByZip(string zip);
        Task<ZipCodeDto> GetById(int zipId);
        Task<List<ZipCodeDto>> GetAll();
        Task<PostNLAddressDto> Verify(string zipcode, string houseNumber);
        Task<PaginatedList<ZipCodeDto>> GetList(PaginatedListDto paginatedList);
        Task<ZipCodeDto> Create(ZipCodeDto zipCode);
        Task<bool> Delete(int zipId);
        Task<bool> Update(ZipCodeDto entity); //put
        Task<bool> CreateBundle(List<ZipCodeDto> entityList);
    }

    public class ZipCodeService : IZipCodeService

    {
        private readonly IZipCodeRepository _zipCodeRepository;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;

        public ZipCodeService(
            IZipCodeRepository zipCodeRepository, 
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _zipCodeRepository = zipCodeRepository;
            _mapper = mapper;
            _appSettings = appSettings.Value;

        }
        public async Task<bool> GetByZip(string zip)
        {
            var zipCode = await _zipCodeRepository.GetByZip(zip).ConfigureAwait(false);
            //return zipCode != null ? _mapper.Map<ZipCodeDto>(zipCode) : null;
            return zipCode != null;
        }

        public async Task<List<ZipCodeDto>> GetAll()

        {
            var zipCodeList = await _zipCodeRepository
               .GetAll()
               .ToListAsync()
               .ConfigureAwait(false);

            return _mapper.Map<List<ZipCodeDto>>(zipCodeList);
        }

        public async Task<PostNLAddressDto> Verify(string zipcode, string houseNumber)
        {
            var apiKeyPostNl = _appSettings.PostNlApiKey;
            var url = $"https://api.postnl.nl/address/national/basic/v1/postalcode/?postalcode={zipcode}&housenumber={houseNumber}";
            var client = new System.Net.Http.HttpClient();
            client.DefaultRequestHeaders
                .Accept
                .Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("apikey", apiKeyPostNl);


            try
            {
                var response = await client.GetAsync(url);
                var result = await response.Content.ReadAsStringAsync();
                client.Dispose();
                if (result == "{\"status\": \"0\"}")
                {
                    var statusNull = new PostNLAddressDto
                    {
                        status = "0",
                        streetName = "",
                        houseNumber = "",
                        postalCode = "",
                        city = "",
                        areaCode = ""
                    };
                    return statusNull;
                }
                if (result == "{\"errors\": [{\"status\": \"400\", \"title\": \"Bad Request\", \"detail\": \"postalcode has the wrong format. It should be: 1234AB\"}]}")
                {
                    return null ;
                }
                if (response.Content.Headers.ContentLength > 15)
                {
                    var postNLAddresses = JsonConvert.DeserializeObject<PostNLAddressDto[]>(result);
                    return postNLAddresses[0];
                }                
                
                return null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw new Exception("Error postnl call: " + ex.Message);
            };

        }

        public async Task<PaginatedList<ZipCodeDto>> GetList(PaginatedListDto paginatedList)
        {
            var zipList = await _zipCodeRepository
                .GetList(
                paginatedList.PageNumber,
                paginatedList.SortField,
                paginatedList.SortOrder,
                paginatedList.PageSize)
                .ConfigureAwait(false);

            return _mapper.Map<PaginatedList<ZipCodeDto>>(zipList);
        }

        public async Task<ZipCodeDto> Create(ZipCodeDto zipCode)
        {
            try
            {
                var newZipCode = _mapper.Map<ZipCodeDto, ZipCode>(zipCode);
                var createdZipCode = await _zipCodeRepository.Create(newZipCode).ConfigureAwait(false);
                return _mapper.Map<ZipCode, ZipCodeDto>(createdZipCode);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return null;
            }
        }

        public async Task<bool> Delete(int zipId)
        {
            try
            {
                await _zipCodeRepository.Delete(zipId).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }
        
        public async Task<ZipCodeDto> GetById(int zipId)
        {
            var zipCode = await _zipCodeRepository.GetById(zipId).ConfigureAwait(false);
            return zipCode != null ? _mapper.Map<ZipCodeDto>(zipCode) : null;
        }

        public async Task<bool> Update(ZipCodeDto zipCode)
        {
            try
            {
                var updateZipCode = _mapper.Map<ZipCodeDto, ZipCode>(zipCode);
                await _zipCodeRepository.Update(updateZipCode).ConfigureAwait(false);
                return true;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                return false;
            }
        }

        public async Task<bool> CreateBundle(List<ZipCodeDto> entityList)
        {
            try
            {
                var newEntityList = _mapper.Map<List<ZipCodeDto>, List<ZipCode>>(entityList);
                await _zipCodeRepository.CreateBundle(newEntityList).ConfigureAwait(false);
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
