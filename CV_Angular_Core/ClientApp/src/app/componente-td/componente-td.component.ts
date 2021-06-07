import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import SweetAlet from 'sweetalert2'
import { jq } from 'jquery';
import { CVService } from '../service/cv.service';
@Component({

  selector: 'td-app',
  templateUrl: './componente-td.component.html',
  styleUrls: ['./componente-td.component.css']

})
export class tdComponent implements OnInit{

  gustoControl = new FormControl('');

  @Input() dato: string;

  @Input() datosPdre: any[];
  @Input() IdElement: any[];
  @Input() NomHeder: any[];
  private dataPadre: any[];
  private Keys: string[];
  constructor(protected cvService: CVService) {
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
      title: "Desaa Editar",
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
    let htmlDatos = '<input type="text" id="InputGustos"/>';
    //alert('Listo para editar');
    SweetAlet.fire({
      title: "Datos de la fila",
      //text: "Hola Mundo",
      icon: "success",
      html: htmlDatos,
      preConfirm: (result) => {
        console.log("Editar() preConfirm: result");
        console.log(result);
        if (result) {
          console.log("this.gustoControl.value");
          console.log(jq('#InputGustos').val());
          console.log(this.datosPdre.keys);
          //this.datosPdre.findIndex(this.NomHeder.values);
          //this.cvService.Updata(this.datosPdre.id, this.NomHeder.values, this.gustoControl.value);
        }
      }
      //type: "succes"
    });

  }
  //Eliminar() {

  //  alert('Listo para eliminar');

  //}
}

