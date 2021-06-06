import { Component, Input, OnInit } from '@angular/core';
import SweetAlet from 'sweetalert2'
@Component({

  selector: 'td-app',
  templateUrl: './componente-td.component.html',
  styleUrls: ['./componente-td.component.css']

})
export class tdComponent implements OnInit{

  @Input() dato: string;

  @Input() datosPdre: any[];
  @Input() IdElement: any[];
  @Input() NomHeder: any[];
  private dataPadre: any[];
  private Keys: string[];
  constructor() {
  }
  ngOnInit() {
    this.dataPadre = this.datosPdre;
    //console.log(this.datosPdre);
    //console.log("Los datos padres son de "+this.dato);
  }
  mensaje() {
    console.log(this.dato);
    console.log(this.datosPdre);
    console.log(this.IdElement);
    console.log(this.NomHeder);
    let htmlDatos = "<div calss='container'><div class='row'>";
    this.Keys = Object.keys(this.dataPadre);
    console.log(this.Keys);
    this.Keys.forEach((value) => {
      htmlDatos = htmlDatos + "<div class='col-4'>" + this.dataPadre[value]+"</div>";
    });
    htmlDatos = htmlDatos + "</div></div>";
    //alert("Hola");
    SweetAlet.fire({
      title: "Datos de la fila",
      //text: "Hola Mundo",
      icon: "success",
      html:htmlDatos
      //type: "succes"
    });
  }
  TomarDesicion() {
    console.log(this.dato);
    console.log(this.datosPdre);
    console.log(this.IdElement);
    console.log(this.NomHeder);
    SweetAlet.fire({
      title: "Desae Editar",
      text: "Editaria " + this.NomHeder + " del Id " + this.dataPadre.id,
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText:"Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      preConfirm: (result) => {
        console.log("TomarDesicion() preConfirm: result");
        console.log(result);
        if (result) {
          this.Editar();
        }
      }
      //html: htmlDatos
      //type: "succes"
    }).then((result) => {
      //console.log("TomarDesicion() then: result");
      //console.log(result);
      //if (result.isConfirmed) {
      //  this.Editar();
      //}
      //if (!result.isConfirmed) {
      //  this.Eliminar();
      //}
    });

  }
  Editar() {

    alert('Listo para editar');

  }
  //Eliminar() {

  //  alert('Listo para eliminar');

  //}
}

