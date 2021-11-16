using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrossCuttingConcerns.Enums
{
    public enum UserRole
    {
        NoAccess = 0,
        Blocked = 1,
        Admin = 2,
        SuperAdmin = 3,
    }
}
