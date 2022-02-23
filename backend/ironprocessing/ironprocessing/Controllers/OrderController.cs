using ironprocessing.Controllers.Request;
using ironprocessing.Data;
using ironprocessing.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace ironprocessing.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController
    {
        private readonly DataContext _dataContext;

        public OrderController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost("Create")]
        public void Post(PostOrderRequest request)
        {

            var order = new Order
            {
                FullName = request.FullName,
                Phone = request.Phone,
                Discription = request.Discription,
                AdvertisementId = request.AdvertisementId,
                CreatedDate = DateTime.UtcNow,
            };

            _dataContext.Add(order);
            _dataContext.SaveChanges();
        }

        [HttpGet("GetAll")]
        public IEnumerable<Order> GetAll()
        {
            var orders = _dataContext.Orders.ToList();
            foreach (var order in orders)
            {
                if (order.AdvertisementId != null) 
                {
                    order.Advertisement = _dataContext.Advertisements.FirstOrDefault(p => p.Id == order.AdvertisementId);
                    order.Advertisement.Photos = _dataContext.Photos.Where(p => p.AdvertisementId == order.AdvertisementId).ToList();
                }
            }
            return orders;
        }
    }
}
