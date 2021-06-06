using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using CV_Angular_Core.Model.Response;
using CV_Angular_Core.Model.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace CV_Angular_Core.Controllers
{
    [Route("api/[controller]")]
    public class DatosCVController : Controller
    {
        private Class.sqlAgent sql = new Class.sqlAgent();
        [HttpGet("[action]")]
        public IEnumerable<Datos> Datos()
        {
            DataTable datos = sql.spGetData("[dbo].[Admin]", new string[] { "@Action:data" });
            List<Datos> datosDatos = datos.AsEnumerable().Select(x => new Datos
            {
                Id = (int)x["Id"]
                ,Gustos = Convert.IsDBNull(x["Gustos"])?null:(string?)x["Gustos"]
                ,Prioridad = Convert.IsDBNull(x["Prioridad"])?null:(int?)x["Prioridad"]
            }).ToList();
            return datosDatos;
        }
        [HttpPost("[action]")]
        public MyResponce UpdateData([FromBody]Datos model)
        {
            MyResponce oR = new MyResponce();

            try
            {

                oR.Succes = 1;

            }
            catch (Exception e)
            {

                oR.Succes = 0;
                oR.Message = e.Message;
                
            }

            return oR;

        }
        [HttpPost("[action]")]
        public MyResponce UpdateData([FromBody] UpdateData model)
        {
            MyResponce oR = new MyResponce();
            try
            {

                sql.spSummon("[dbo].[Admin]", new string[] {
                    "@Action:Update"
                    ,"@Propiedad:"+model.Campo
                    ,"@Id:"+model.Id
                    ,"@DatoNuevo:"+model.DatoNuevo
                });
                oR.Succes = 1;

            }
            catch (Exception e)
            {

                oR.Succes = 0;
                oR.Message = e.Message;

            }

            return oR;

        }
    }
}
