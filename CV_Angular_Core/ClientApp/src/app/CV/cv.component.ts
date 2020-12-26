import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'cv-app',
  templateUrl: './cv.component.html'

})
export class CVComponent {

  public datos:JSON;

  constructor(http:HttpClient,@Inject("BASE_URL") baseUrl:string) {

    http.get<JSON>(baseUrl + 'api/DatosCV/Datos').subscribe(result => {
      this.datos = result;
    });

  }

}
