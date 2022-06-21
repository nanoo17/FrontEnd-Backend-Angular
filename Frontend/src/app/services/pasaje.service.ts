import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  private urlBase = "http://localhost:3000/api/pasajes"
  constructor(private _http: HttpClient) { }
  obtenerPasajes(): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this._http.get(this.urlBase, options)
  }

  obtenerPasajesFiltro(categoria: string): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    const queryURL = '/filter?categoria=' + categoria
    return this._http.get(this.urlBase + queryURL, options)
  }

  eliminarPasaje(id: string): Observable<any> {
    const options = {
      method: "DELETE",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this._http.delete(this.urlBase + '/delete/' + id, options)
  }
  crearPasaje(pasaje: Pasaje): Observable<any> {
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    const body = {
      precioPasaje: pasaje.precioPasaje,
      categoriaPasaje: pasaje.categoriaPasaje,
      fechaCompra: pasaje.fechaCompra,
      pasajero: pasaje.pasajero._id
    }
    return this._http.post(this.urlBase + '/create', body, options)
  }

  modificarPasaje(pasaje: Pasaje): Observable<any> {
    const options = {
      method: "PUT",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    const body = {
      _id: pasaje._id,
      precioPasaje: pasaje.precioPasaje,
      categoriaPasaje: pasaje.categoriaPasaje,
      fechaCompra: pasaje.fechaCompra,
      pasajero: pasaje.pasajero._id
    }
    return this._http.put(this.urlBase + '/update/' + pasaje._id, body, options)
  }

  obtenerPasajePorId(id: string): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    return this._http.get(this.urlBase + '/' + id, options)
  }

}
