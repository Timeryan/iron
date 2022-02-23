using ironprocessing.Controllers.Request;
using ironprocessing.Data;
using ironprocessing.Data.Models;
using ironprocessing.Models;
using Microsoft.AspNetCore.Mvc;

namespace ironprocessing.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhotoController : ControllerBase
    {
      
        private readonly ILogger<PhotoController> _logger;
        private readonly DataContext _dataContext;

        public PhotoController(ILogger<PhotoController> logger, DataContext dataContext)
        {
            _logger = logger;
            _dataContext = dataContext;
        }

        [HttpPost("Create")]
        public async Task<int> Create(IFormFile file)
        {
            var photo = new Photo();
            await using (var ms = new MemoryStream())
            {
                await using (var fs = file.OpenReadStream())
                {
                    await fs.CopyToAsync(ms);
                    var arr = ms.ToArray();
                    photo.Content = Convert.ToBase64String(arr);
                }
            }

            await _dataContext.AddAsync(photo);
            await _dataContext.SaveChangesAsync();

            return photo.Id;
        }

        [HttpDelete("Delete")]
        public void Delete([FromQuery] int id)
        {
            _dataContext.Photos.Remove(new Photo { Id = id });
            _dataContext.SaveChanges();
        }
    }
}