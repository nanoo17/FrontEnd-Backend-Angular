import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlBase = 'http://localhost:3000/api/personas'
  constructor(private _http: HttpClient) { }

  obtenerPersonas(): Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this._http.get(this.urlBase, options)
  }
}
