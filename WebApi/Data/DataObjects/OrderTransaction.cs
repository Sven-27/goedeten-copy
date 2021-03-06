using CrossCuttingConcerns.EntityFrameworkGenerics;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DataObjects
{

    [Table("OrderTransaction", Schema = "GoedEten")]
    public class OrderTransaction:IEntity
    {
        public int Id { get; set; }
        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public string TransactionId { get; set; }
        public string TransactionStatus { get; set; }

        public DateTime TransactionDateTime {get; set;}

    }
}
