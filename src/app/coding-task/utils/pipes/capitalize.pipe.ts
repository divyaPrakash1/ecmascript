import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    const val = value.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()).join(' ');
    return val
  }

}
