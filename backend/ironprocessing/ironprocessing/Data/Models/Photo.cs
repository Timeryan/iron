namespace ironprocessing.Data.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public int? AdvertisementId { get; set; }
        public string Content { get; set; } = string.Empty;
    }
}
