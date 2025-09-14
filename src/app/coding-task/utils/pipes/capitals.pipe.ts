import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitals'
})
export class CapitalsPipe implements PipeTransform {

  transform(value: string): string | null {
    if (!value) return null;

    return value.toUpperCase();

  }

}
