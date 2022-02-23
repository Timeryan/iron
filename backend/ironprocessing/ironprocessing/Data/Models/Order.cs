using ironprocessing.Models;

namespace ironprocessing.Data.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Discription { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public int? AdvertisementId { get; set; }
        public Advertisement Advertisement { get; set; }
    }
}
