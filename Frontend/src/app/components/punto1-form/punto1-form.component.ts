import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroServiceService } from 'src/app/services/libro-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent implements OnInit {
  libro!: Libro;
  constructor(private libroService: LibroServiceService) {
    this.libro = new Libro();
  }

  ngOnInit(): void {
  }
  guardarLibro() {

    this.libroService.crearLibro(this.libro).subscribe((data) => {
      if (data) {
        Swal.fire(
          'Cargado!',
          'Se guardó el libro correctamente!',
          'success'
        )
      }
      else {
        Swal.fire(
          'Cargado!',
          'Se guardó el libro correctamente!',
          'error'
        )
      }

    });
    this.libro = new Libro();
  }


}


