import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CVService } from '../service/cv.service';

//interfaces
import { Datos } from '../interfaces';
import { Observable } from 'rxjs';

@Component({

  selector: 'cv-app',
  templateUrl: './cv.component.html'

})
export class CVComponent {

  public lineaDatos: Observable<Datos[]>;
  public HeadKeys: string[];


  constructor(
    //http: HttpClient, @Inject("BASE_URL") baseUrl: string
    //,
    protected cvService: CVService
  ) {
    this.GetData();
  }
  public GetData() {
    this.lineaDatos = this.cvService.GetData();
    console.log(this.lineaDatos);
    this.lineaDatos.subscribe(result => {
      console.log(result);
      this.HeadKeys = Object.keys(result[0]);
      this.HeadKeys.push("Editar");

      this.HeadKeys.push("Eliminar");
      console.log("GetData() HeadKeys");
      console.log(this.HeadKeys);
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
//interface Datos {
//  Id: number,
//  Gustos: string,
//  Prioridad:number
//}
interface Captura {
  captura: Datos,
  index: number
}
