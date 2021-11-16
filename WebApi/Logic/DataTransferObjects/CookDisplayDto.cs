namespace Logic.DataTransferObjects
{
    public class CookDisplayDto
    {
        public int Id { get; set; } // Maps to datamodel
        public string Name { get; set; }
        public string Description { get; set; }
        public string Motivation { get; set; }
        public string Specialization { get; set; }
        public string Photo { get; set; }
        public bool Active { get; set; }
        public string LocationName { get; set; }
    }
}