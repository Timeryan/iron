using ironprocessing.Data.Models;

namespace ironprocessing.Controllers.Responce
{
    public class PagedAdvertisementResponce
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Photo Photo { get; set; } = new Photo();
        public decimal Price { get; set; } = decimal.Zero;
        public string TitleUrl { get; set; } = string.Empty; 
    }
}
