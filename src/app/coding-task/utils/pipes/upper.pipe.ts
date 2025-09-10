import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (!value) return null;
    return value.toString().toUpperCase();
  }

}
