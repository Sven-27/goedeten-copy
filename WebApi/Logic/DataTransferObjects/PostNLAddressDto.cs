using Newtonsoft.Json;

namespace Logic.DataTransferObjects
{
    public class PostNLAddressDto
    {
        [JsonProperty(PropertyName = "status")]
        public string status { get; set; }

        [JsonProperty(PropertyName = "streetName")]
        public string streetName { get; set; }

        [JsonProperty(PropertyName = "houseNumber")]
        public string houseNumber { get; set; }

        [JsonProperty(PropertyName = "postalCode")]
        public string postalCode { get; set; }

        [JsonProperty(PropertyName = "city")]
        public string city { get; set; }

        [JsonProperty(PropertyName = "areaCode")]
        public string areaCode { get; set; }
    }
}
