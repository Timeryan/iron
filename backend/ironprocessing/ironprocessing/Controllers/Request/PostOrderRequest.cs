using ironprocessing.Models;

namespace ironprocessing.Controllers.Request
{
    public class PostOrderRequest
    {
        public string FullName { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Discription { get; set; } = string.Empty;
        public int? AdvertisementId { get; set; }
    }
}
