using ironprocessing.Data.Models;
using ironprocessing.Models;
using Microsoft.EntityFrameworkCore;

namespace ironprocessing.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Advertisement> Advertisements { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
