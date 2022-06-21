import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})
export class PageBComponent implements OnInit {
  transaccion!: Transaccion;
  constructor(private transaccionService: TransaccionService) {
    this.transaccion = new Transaccion();
  }

  ngOnInit(): void {
  }

  convertir() {
    this.transaccion.cantidadDestino = this.transaccion.cantidadOrigen * this.transaccion.tasaConversion;
    this.transaccionService.crearTransaccion(this.transaccion).subscribe();
  }
}
