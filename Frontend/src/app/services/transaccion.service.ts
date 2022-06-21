import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  urlBase: string = "http://localhost:3000/api/transacciones";
  constructor(private _http: HttpClient) { }
  crearTransaccion(transaccion: Transaccion): Observable<any> {
    const options = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    const body = JSON.stringify(transaccion)
    return this._http.post(this.urlBase + '/create', body, options)
  }
  obtenerTransacciones(): Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    return this._http.get(this.urlBase + '/', options)
  }

  filtrarTransacciones(origen: string, destino: string): Observable<any> {
    const options = {
      method: 'GET',
      params: {
        "origen": origen,
        "destino": destino
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this._http.get(this.urlBase + '/filter', options)
  }
}
