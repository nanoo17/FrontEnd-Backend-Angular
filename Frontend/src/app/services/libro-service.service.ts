import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroServiceService {
  urlBase: string = "http://localhost:3000/api/libros"
  constructor(private _http: HttpClient) { }
  public obtenerLibros(): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    return this._http.get(this.urlBase, options);
  }
  public crearLibro(libro: Libro): Observable<any> {
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    const body = JSON.stringify(libro);
    return this._http.post(this.urlBase + '/create', body, options);
  }
}
