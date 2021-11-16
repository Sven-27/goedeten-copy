using Logic.DataTransferObjects;
using Logic.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using WepApi.Infrastructure;
using OmniKassa;
using System.Collections.Specialized;
using OmniKassa.Model.Response;
using OmniKassa.Exceptions;
using OmniKassa.Model.Enums;
using OmniKassa.Model;
using OmniKassa.Model.Order;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Primitives;
using OmniKassa.Model.Response.Notification;
using Endpoint = OmniKassa.Endpoint;
using System;
using System.Diagnostics;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _service;
        private static ApiNotification _notification;
        private readonly IEmailService _emailService;
        public OrderController(IOrderService service, IEmailService emailService)
        {
            _service = service;
            _emailService = emailService;
        }

        [AllowAnonymous]
        [HttpPost("omninotify")]
        public async Task<IActionResult> OmniNotify([FromBody] ApiNotification notification)
        {
            _notification = notification;
            // string str_notification = Newtonsoft.Json.JsonConvert.SerializeObject(notification);
            // await _emailService.TestEmail("niels.gras.bee@outlook.com", "Notification", str_notification).ConfigureAwait(false);
            await RetrieveUpdates();
            return new OkObjectResult("");
        }


        private async Task<bool> RetrieveUpdates()
        {
            if (_notification != null)
            {
                try
                {
                    return await _service.RetrieveUpdates(_notification);
                }
                catch (RabobankSdkException)
                {
                    return false;
                }
            }
            return false;
        }


        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // GET: api/order
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var results = await _service
                .GetAll()
                .ConfigureAwait(false);

            if (results != null) return Ok(results);
            return BadRequest();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // GET: api/order/deliveries
        [HttpGet("deliveries")]
        public async Task<IActionResult> GetAllDeliveries()
        {
            var results = await _service
                .GetAllDeliveries()
                .ConfigureAwait(false);

            if (results != null) return Ok(results);
            return BadRequest();
        }

        [AllowAnonymous]
        // GET: api/order/utctime
        [HttpGet("utctime")]
        public OkObjectResult GetUtcTime()
        {
            var utcDate = DateTime.UtcNow;

            return Ok(utcDate);
        }

        [AllowAnonymous]
        //POST : api/Order
        [HttpPost]
        public async Task<IActionResult> PlaceOrder(OrderEasyDto entity)
        {
            if (ModelState.IsValid)
                try
                {
                    // check TotalAmount
                    var totalAmount = CheckTotalAmount(entity);
                    if (totalAmount != entity.TotalAmount) return BadRequest("Total amount " + entity.TotalAmount.ToString()
                    + " of input data is wrong .... it has to be " + totalAmount.ToString());
                    // TotalAmount is good
                    var createdOrder = await _service
                        .Create(entity)
                        .ConfigureAwait(false);
                    if (createdOrder != null) return Ok(createdOrder);
                }
                catch (Exception ex)
                {
                    Debug.WriteLine(ex.Message);
                    return BadRequest(false);
                }
            return BadRequest(false);
        }


        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // GET: api/order/5
        [HttpGet("{orderId}")]
        public async Task<IActionResult> Get(int orderId)
        {
            var result = await _service
                .GetById(orderId);

            if (result != null) return Ok(result);
            return NotFound();
        }

        [AllowAnonymous]
        // GET: api/order/status/5
        [HttpGet("status/{orderId}")]
        public async Task<IActionResult> GetStatus(int orderId)
        {
            var result = await _service
                .GetById(orderId);

            if (result != null) return Ok(new {Id = result.Id, Status = result.Status});
            return NotFound();
        }

        [Authorize(Roles = AuthRoles.SuperAdmin)]
        // PUT Update: api/cook
        [HttpPut]
        public async Task<IActionResult> Update(OrderDto order)
        {
            if (await _service
                .Update(order)
                .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }
        // [AllowAnonymous]
        // // DELETE: api/order/1
        // [HttpDelete("{orderId}")]
        // public async Task<IActionResult> DeleteOrder(int orderId)
        // {
        //     if (await _service.DeleteOrder(orderId).ConfigureAwait(false)) return Ok(true);
        //     return BadRequest(false);
        // }

        private decimal CheckTotalAmount(OrderEasyDto data)
        {
            var sum_dishes = data.Cart.Sum(c => c.Quantity * c.Price);
            var deliveries = data.Cart.GroupBy(c => c.Dish.Date).ToList().Count;
            return sum_dishes + (deliveries * 2.5m);
        }

    }
}
