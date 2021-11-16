using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Logic.DataTransferObjects;
using Logic.Services;
using Data.DataObjects;
using DataLayer;
using Microsoft.AspNetCore.Authorization;
using WepApi.Infrastructure;
using CrossCuttingConcerns.Validations;

namespace WebApi.Controllers
{

    [Authorize]
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IEmailService _emailService;

        public CustomerController(ICustomerService customerService, IEmailService emailService)
        {
            _customerService = customerService;
            _emailService = emailService;
        }
         [AllowAnonymous]
        // GET: api/Customers
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var customers = await _customerService
                .GetAll()
                .ConfigureAwait(false);

            if (customers != null) return Ok(customers);
            return BadRequest();
        }

        [AllowAnonymous]
        // GET: api/Customers/5
        [HttpGet("{customerId}")]
        public async Task<IActionResult> Get(int customerId)
        {
            var customer = await _customerService
                .GetById(customerId);

            if (customer != null) return Ok(customer);
            return NotFound();
        }

        [AllowAnonymous]
        [HttpPost("getlist")]
        public async Task<IActionResult> GetList(PaginatedListDto paginatedList)
        {
            var customers = await _customerService
                .GetList(paginatedList);

            if (customers != null) return Ok(customers);
            return BadRequest();
        }

        [AllowAnonymous]
        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> Create(CustomerDto customer)
        { 
            //if (customer.Date == DateTime.MinValue) customer.Date = DateTime.Now;
            if (EmailValidation.IsValidEmail(customer.Email)){
                if (ModelState.IsValid){
                    var result = await _customerService
                        .Create(customer)
                        .ConfigureAwait(false);
                    
                    if (result){
                        await _emailService.RegisterInterestEmail(customer.Email, customer.Zipcode).ConfigureAwait(false);
                        return Ok(result);
                    }
                    BadRequest(false);
                }
            }
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> Update(CustomerDto customer)
        {
            if (ModelState.IsValid)
                if (await _customerService
                    .Update(customer)
                    .ConfigureAwait(false)) return Ok(true);
            return BadRequest(false);
        }

        [Authorize(Roles = AuthRoles.SuperAdmin + "," + AuthRoles.Admin)]
        // DELETE: api/Customers/5
        [HttpDelete("{customerId}")]
        public async Task<IActionResult> Delete(int customerId)
        {
            if (await _customerService
                 .Delete(customerId)
                 .ConfigureAwait(false)) return Ok(true);
            return NotFound(false);
        }
    }
}
