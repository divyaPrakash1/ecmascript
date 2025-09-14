import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstAndLastCapital'
})
export class FirstAndLastCapitalPipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) return null;
    return value.split(' ').map(e => `${e.charAt(0).toUpperCase()}${e.slice(1, e.length - 1).toLowerCase()}${e.charAt(e.length - 1).toUpperCase()}`).join(' ');
  }

}
