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
      return (item.name.toUpperCase().includes(search)
          || item.results.toUpperCase().includes(search)
          || item.violations.toUpperCase().includes(search));
    });
   }
}