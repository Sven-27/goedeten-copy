namespace Logic.DataTransferObjects
{
    public class PaginatedListDto
    {
        public int PageNumber { get; set; }
        public string SortField { get; set; }
        public string SortOrder { get; set; }
        public int PageSize { get; set; }
    }
}
