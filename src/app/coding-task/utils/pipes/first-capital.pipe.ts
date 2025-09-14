import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    const val = value.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
    return val;
  }

  // transform(value: string): string {
  //   const val = value.split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()).join(' ');
  //   return val
  // }

}
