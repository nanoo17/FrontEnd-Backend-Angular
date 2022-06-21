import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (value == 'a') {
      return 'Adulto'
    }
    else if (value == 'j') {
      return 'Jubilado'
    }
    else if (value == 'm') {
      return 'Menor'
    }
    else {
      return ''
    }
  }

}
