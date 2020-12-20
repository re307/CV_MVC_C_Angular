using CV_MVC_Angular.Models;
using CV_MVC_Angular.Models.ViewModels;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CV_MVC_Angular.Controllers
{
    public class HomeController : Controller
    {

        private cv_dbEntities db = new cv_dbEntities();
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult AficionesUser()
        {
            List<Maestro_AficionesViewModel> aificonesUserVM = new List<Maestro_AficionesViewModel>();
            aificonesUserVM = db.Maestro_Aficiones.Select(x => new Maestro_AficionesViewModel {
                Nombre = x.Nombre
                ,Prioridad = x.Prioridad
            }).ToList();

            var data = Json(aificonesUserVM, JsonRequestBehavior.AllowGet);
            data.MaxJsonLength = int.MaxValue;
            return data;
        }
    }
}