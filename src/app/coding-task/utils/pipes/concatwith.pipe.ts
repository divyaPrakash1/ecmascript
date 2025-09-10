import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatwith'
})
export class ConcatwithPipe implements PipeTransform {

  transform(value: string, param: string): string {
    let val = value.split(' ').join(param);
    return val;
  }

}
