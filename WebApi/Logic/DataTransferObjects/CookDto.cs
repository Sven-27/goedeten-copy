namespace Logic.DataTransferObjects
{
    public class CookDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Motivation { get; set; }
        public string Specialization { get; set; }
        public string Photo { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string LocationName { get; set; }
        public bool Active { get; set; }
    }
}