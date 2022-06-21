import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasajes!: Array<Pasaje>;
  categoria: string = ""
  constructor(private pasajeService: PasajeService, private router: Router) {
    this.cargarPasajes();
  }
  ngOnInit(): void {
  }
  filtrarCategoria() {
    this.pasajeService.obtenerPasajesFiltro(this.categoria).subscribe(
      (data: Array<Pasaje>) => {
        this.pasajes = new Array<Pasaje>;
        console.log(this.pasajes);
        Object.assign(this.pasajes, data);
      }
    )
  }
  cargarPasajes() {
    this.pasajeService.obtenerPasajes().subscribe(
      (data: Array<Pasaje>) => {
        this.pasajes = new Array<Pasaje>;
        console.log(this.pasajes);
        Object.assign(this.pasajes, data)
      }
    )
  }
  eliminar(pasaje: any) {

    try {
      Swal.fire({
        title: 'Seguro que quieres eliminar este pasaje?',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Se elimino correctamente!', '', 'success')
          this.pasajeService.eliminarPasaje(pasaje._id).subscribe();
          //recarga la pagina asi se actualiza el table
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/punto3'])
        }
      })
    }
    catch (err) {
      console.log(err);
    }

  }
  modificar(pasaje: Pasaje) {
    this.router.navigate(['/punto3-editar/', pasaje._id])
  }
}
