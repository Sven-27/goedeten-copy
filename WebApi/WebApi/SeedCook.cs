using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Logic.DataTransferObjects;
using Logic.Services;

namespace WebApi
{
    public class SeedCook
    {
        public static async Task SeedData(ICookService _cookService, string JSONfileName)
        {
            var cookList = await _cookService.GetAll().ConfigureAwait(false);
            if (cookList.Count != 0) return;

            var file = File.ReadAllText(JSONfileName);
            var cookBundle = JsonSerializer.Deserialize<List<CookDto>>(file);
            await _cookService.CreateBundle(cookBundle);
        }
    }
}