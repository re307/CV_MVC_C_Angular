import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'cv-app',
  templateUrl: './cv.component.html'

})
export class CVComponent {

  public lineaDatos: Datos[];
  public HeadKeys: string[];

  constructor(http:HttpClient,@Inject("BASE_URL") baseUrl:string) {

    http.get<Datos[]>(baseUrl + 'api/DatosCV/Datos').subscribe(result => {
      
      this.lineaDatos = result;
      console.log(result);
      this.HeadKeys = Object.keys(this.lineaDatos[0]);
      this.HeadKeys.push("Editar");

      this.HeadKeys.push("Eliminar");


    });

  }
  Editar(Id) {
    let optenData = capturaDatos(this.lineaDatos, Id);
    console.log(optenData.captura);
    console.log(optenData.indexCaptura);
  }
  Eliminar(Id) {
    //alert("Eliminar");
    let optenData = capturaDatos(this.lineaDatos, Id);
    console.log(optenData.captura);
    console.log(optenData.indexCaptura);
  }
}
function capturaDatos(array,Id) {
  let data;
  array.forEach((valor, index) => {
    //console.log(valor);
    if (valor.id == Id) {

      //console.log(valor);
      data = {
        captura: valor,
        indexCaptura: index
      }

    }
  });
  return data;
}
interface Datos {
  Id: number,
  Gustos: string,
  Prioridad:number
}
interface Captura {
  captura: Datos,
  index: number
}
