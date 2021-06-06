using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Angular_Core.Model.ViewModel
{
    public class Datos
    {
        public int Id { get; set; }
        public string? Gustos { get; set; }
        //public string? IdGustos { get; set; }
        public int? Prioridad { get; set; }
        //public string? IdPrioridad { get; set; }
    }
    public class UpdateData
    {
        public int Id { get; set; }
        public int Campo { get; set; }
        public string DatoNuevo { get; set; }
    }
}
