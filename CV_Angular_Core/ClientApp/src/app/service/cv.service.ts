import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//interfaces
import { Datos, MyResponce } from '../interfaces';
import { Observable } from 'rxjs';

const httpOpcions = {
  headers: new HttpHeaders({
    'Content-Type': 'applicaction/json'
    ,'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})



export class CVService {
  
  //private http: HttpClient;
  private baseUrl: string;

  constructor(protected http: HttpClient, @Inject("BASE_URL") baseUrl: string
  ) { this.baseUrl = baseUrl }


  public GetData(): Observable<Datos[]> {
    return this.http.get<Datos[]>(this.baseUrl + 'api/DatosCV/Datos');

  }

  public Updata(Id,campo,datonuevo) {
    this.http.post<MyResponce>(
      this.baseUrl + 'api/DatosCV/Update'
      ,{ 'Id': Id, 'Campo': campo, 'DatoNuevo': datonuevo }
      ,httpOpcions
    ).subscribe(result => {
      console.log(result);
    },error => console.error(error)
    );
  }
}
