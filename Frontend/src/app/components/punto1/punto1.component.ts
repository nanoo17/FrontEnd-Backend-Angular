import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroServiceService } from 'src/app/services/libro-service.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  Libros: Array<Libro> = [];
  indice: number = 0;
  Libro!: Libro;
  constructor(private libroService: LibroServiceService) {
    this.cargarLibros();
  }

  cargarLibros() {
    this.Libro = new Libro();
    this.libroService.obtenerLibros().subscribe((data) => {
      Object.assign(this.Libros, data);
      Object.assign(this.Libro, data[0]);
    });
  }

  siguiente() {
    this.indice = this.indice + 1;
    if (this.indice < this.Libros.length) {
      this.Libro = this.Libros[this.indice];
    }
  }


  anterior() {
    this.indice = this.indice - 1;
    if (this.indice < this.Libros.length) {
      this.Libro = this.Libros[this.indice];
    }

  }


  ngOnInit(): void {
  }

}
