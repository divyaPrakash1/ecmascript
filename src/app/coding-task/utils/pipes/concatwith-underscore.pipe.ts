import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatwithUnderscore'
})
export class ConcatwithUnderscorePipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) return null;

    return value.split(' ').join('_');
  }

}
