using CrossCuttingConcerns.EntityFrameworkGenerics;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.DataObjects
{
    public class DishAvailabilityOrder
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

    }
}
