import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], search: string): any[] {
    if (!items) return [];
    if (!search) return items;
    
    search = search.toUpperCase();
    return items.filter(item => {
      // return Object.values(item).map(value => {
      //   if (value) {
      //     return value.toUpperCase().includes(search);
      //   }
      // });
      return item.name.includes(search);
    });
   }
}