import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//interfaces
import { Datos } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CVService {
  public algo: string = "Hola pirinola";
  //private http: HttpClient;
  private baseUrl: string;

  constructor(protected http: HttpClient, @Inject("BASE_URL") baseUrl: string
  ) { this.baseUrl = baseUrl }


  public GetData(): Observable<Datos[]> {
    //console.log(this.http.get<Datos[]>(this.baseUrl + 'api/DatosCV/Datos'));
    //this.http.get<Datos[]>(this.baseUrl + 'api/DatosCV/Datos').subscribe(result => {
    //  console.log(result);
    //});
    return this.http.get<Datos[]>(this.baseUrl + 'api/DatosCV/Datos');

  }
}
