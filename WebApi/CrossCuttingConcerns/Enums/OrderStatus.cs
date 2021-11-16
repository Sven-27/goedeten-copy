using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrossCuttingConcerns.Enums
{
    public enum OrderStatus
    {
        New = 0,
        Processing = 1,
        FailedOrCancelled = 2,
        Approved = 3,
        Sent = 4,
        Delivered = 5,
    }
}
