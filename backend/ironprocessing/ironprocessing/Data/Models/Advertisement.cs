using ironprocessing.Data.Models;

namespace ironprocessing.Models
{
    public class Advertisement
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public virtual List<Photo> Photos { get; set; } = new List<Photo>();
        public decimal Price { get; set; } = decimal.Zero;

    }
}