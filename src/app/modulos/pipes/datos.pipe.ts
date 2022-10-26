import { Pipe, PipeTransform } from '@angular/core';
import { _ServicioComun } from '../../servicios/comun.service';

@Pipe({
  name: 'dato',
})
export class DatosPipe implements PipeTransform {
  public transform(data: any): string {
    const lines: string[] = [];
    let result: string = '';

    for (const key in data) {
      lines.push(
        `${_ServicioComun.capitalize(key?.replace('_', ' '))}: ${data[key]}`
      );
    }

    result = lines?.join('<br>');
    return result;
  }
}
