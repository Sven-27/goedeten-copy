using System;

namespace Data.DataObjects
{
    public class CookAvailabilityDisplay
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int CookId { get; set; }
        public bool? Available { get; set; }
        public string Name { get; set; }
        public string LocationName { get; set; }
    }
}
