namespace Logic.DataTransferObjects
{
    public class DishPagedFilterDto:PaginatedListDto
    {
        public string CategoryFilter { get; set; }
        public string NameFilter { get; set; }
        public string CookFilter { get; set; }
        public string CuisineFilter { get; set; }


    }
}
