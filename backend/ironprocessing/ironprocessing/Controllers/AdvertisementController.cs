using ironprocessing.Controllers.Request;
using ironprocessing.Controllers.Responce;
using ironprocessing.Data;
using ironprocessing.Data.Models;
using ironprocessing.Models;
using Microsoft.AspNetCore.Mvc;
using WebApp.Infrastructure;

namespace ironprocessing.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdvertisementController : ControllerBase
    {
      
        private readonly ILogger<AdvertisementController> _logger;
        private readonly DataContext _dataContext;

        public AdvertisementController(ILogger<AdvertisementController> logger, DataContext dataContext)
        {
            _logger = logger;
            _dataContext = dataContext;
        }

        [HttpGet("GetAllAdvertisement")]
        public IEnumerable<Advertisement> GetAll()
        {
            return _dataContext.Advertisements.ToList();
        }

        [HttpGet("GetPaged")]
        public async Task<IEnumerable<PagedAdvertisementResponce>> GetPaged(int offset, int count)
        {
            List<PagedAdvertisementResponce> responce = new List<PagedAdvertisementResponce>();
            var ads = _dataContext.Advertisements.Skip(offset).Take(count).ToList();

            responce = ads.Select(ad => new PagedAdvertisementResponce
            {
                Id = ad.Id,
                Title = ad.Title,
                Description = ad.Description,
                Price = ad.Price,
                TitleUrl = TransliterationHelper.Front(ad.Title)

            }).ToList();

            foreach (var ad in responce)
            {
                ad.Photo = _dataContext.Photos.FirstOrDefault(p => p.AdvertisementId == ad.Id);
            }

            return responce;
        }

        [HttpGet("GetById")]
        public async Task<Advertisement> GetById(int id)
        {
            var ad = await _dataContext.FindAsync<Advertisement>(new object[] { id });
            ad.Photos = _dataContext.Photos.Where(x => x.AdvertisementId == id).ToList();
            return ad;
        }

        [HttpPost("Create")]
        public void Post(PostAdvertisementRequest request)
        {
            
            var ad = new Advertisement
            {
                Title = request.Title,
                Description = request.Description,
                Price = request.Price
            };

            _dataContext.Add(ad);
            _dataContext.SaveChanges();

            foreach (var photoId in request.Photos)
            {
                var photo = _dataContext.Photos.FirstOrDefault(p => p.Id == photoId);
                if (photo != null) 
                {
                    photo.AdvertisementId = ad.Id;
                    _dataContext.Update(photo);
                }
            }
            _dataContext.SaveChanges();
        }
    }
}