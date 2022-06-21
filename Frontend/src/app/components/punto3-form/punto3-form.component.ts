import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {
  pasaje!: Pasaje;
  personas: Array<Persona> = []
  action: string = 'new'
  constructor(private router: Router, private route: ActivatedRoute, private pasajeService: PasajeService, private personaService: PersonaService) {
    this.pasaje = new Pasaje();
    this.pasaje.fechaCompra = new Date().toLocaleString();
    this.personaService.obtenerPersonas().subscribe(
      (data: Array<Persona>) => {
        Object.assign(this.personas, data)
      }
    )

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['id']) {
        if (params['id'] == 'crear') this.action = 'new'
        else {
          //si el id que le pasamos es un numero
          //cambiamos la accion a editar
          this.action = 'edit'
          //se cargan los datos del pasaje a editar
          this.pasajeService.obtenerPasajePorId(params['id']).subscribe(
            (data: Pasaje) => {
              Object.assign(this.pasaje, data)
            }
          )
        }
      }
    })
  }
  guardarPasaje() {
    if (this.action == 'new') {
      try {
        Swal.fire({
          title: 'Seguro que quieres guardar el pasaje?',
          showCancelButton: true,
          confirmButtonText: 'Guardar',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Se guardo correctamente!', '', 'success')
            let descuento = 0
            if (this.pasaje.categoriaPasaje == "m") descuento = 0.25
            else if (this.pasaje.categoriaPasaje == "j") descuento = 0.5
            this.pasaje.precioPasaje = this.pasaje.precioPasaje - (this.pasaje.precioPasaje * descuento);
            this.pasajeService.crearPasaje(this.pasaje).subscribe();
            this.pasaje = new Pasaje();
          }
        })
      }
      catch (err) {
        console.log(err);
      }
    }
    else {

      try {
        Swal.fire({
          title: 'Seguro que quieres guardar el pasaje?',
          showCancelButton: true,
          confirmButtonText: 'Guardar',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Se guardo correctamente!', '', 'success')
            let descuento = 0
            if (this.pasaje.categoriaPasaje == "m") descuento = 0.25
            else if (this.pasaje.categoriaPasaje == "j") descuento = 0.5
            this.pasaje.precioPasaje = this.pasaje.precioPasaje - (this.pasaje.precioPasaje * descuento);
            this.pasajeService.modificarPasaje(this.pasaje).subscribe()
            this.router.navigate(['/punto3'])
          }
        })
      }
      catch (err) {
        console.log(err);
      }

    }

  }
}
