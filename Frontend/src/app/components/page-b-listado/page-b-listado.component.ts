import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-page-b-listado',
  templateUrl: './page-b-listado.component.html',
  styleUrls: ['./page-b-listado.component.css']
})
export class PageBListadoComponent implements OnInit {
  transacciones!: Array<Transaccion>;
  monedaOrigen !: string;
  monedaDestino!: string;
  constructor(private transaccionService: TransaccionService) {
    this.transacciones = new Array<Transaccion>;
    this.obtenerTransacciones();
  }

  ngOnInit(): void {
  }
  obtenerTransacciones() {
    this.transaccionService.obtenerTransacciones().subscribe(async (data: Array<Transaccion>) => {
      Object.assign(this.transacciones, data)
    })
  }
  obtenerTransaccionesFiltro() {
    this.transaccionService.filtrarTransacciones(this.monedaOrigen, this.monedaDestino).subscribe(
      (data: Array<Transaccion>) => {
        this.transacciones = []
        Object.assign(this.transacciones, data)
      })
  }
}
