﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.DataTransferObjects
{
    public class VatCategoryDto
    {
        public int Id { get; set; }       
        public string Name { get; set; }
        public decimal Value { get; set; }
    }
}
