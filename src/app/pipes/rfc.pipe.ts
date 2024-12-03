import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rfc',
  standalone: true
})
export class RfcPipe implements PipeTransform {

  transform(value: string): string {
    return `RFC ${value}`;
  }

}
