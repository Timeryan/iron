using ironprocessing.Data.Models;

namespace ironprocessing.Controllers.Request
{
    public class PostAdvertisementRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int[] Photos { get; set; } = Array.Empty<int>();
        public decimal Price { get; set; } = decimal.Zero;
    }
}
