using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CV_Angular_Core.Controllers
{
    [Route("api/[controller]")]
    public class DatosCVController : Controller
    {
        private Class.sqlAgent sql = new Class.sqlAgent();
        [HttpGet("[action]")]
        public IActionResult Datos()
        {
            DataTable datos = sql.spGetData("[dbo].[Admin]", new string[] { "@Action:data" });
            List<object[]> data = new List<object[]>();
            foreach (DataRow item in datos.Rows)
            {

                data.Add(item.ItemArray);

            }
            return Json(data);
        }
    }
}
