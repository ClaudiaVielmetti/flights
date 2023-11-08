using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Flights.Data;
using Flights.ReadModels;


namespace Flights.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly Entities _entities;

        public BookingController(Entities entities)
        {
            _entities = entities;
        }

        [HttpGet("{email}")]
        [ProducesResponseType(typeof(IEnumerable<BookingRm>),200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
       public ActionResult<IEnumerable<BookingRm>> List(string email)
        {

        }
    }
}
