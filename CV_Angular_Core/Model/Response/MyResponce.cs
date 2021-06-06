using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Angular_Core.Model.Response
{
    public class MyResponce
    {
        public int Succes { get; set; }
        public string Message { get; set; } 
        public object Data { get; set; }
    }
}
