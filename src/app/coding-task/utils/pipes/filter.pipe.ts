import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: string[], searchText: string): any {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(e => e.toLowerCase().includes(searchText.toLowerCase()));
  }

}
