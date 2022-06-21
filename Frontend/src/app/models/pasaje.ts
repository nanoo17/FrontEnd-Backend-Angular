import { Persona } from "./persona"

export class Pasaje {
  _id!: string;
  precioPasaje!: number
  categoriaPasaje!: string
  fechaCompra!: string
  pasajero!: Persona
}
