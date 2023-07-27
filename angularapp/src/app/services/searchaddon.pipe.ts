import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchaddon'
})
export class SearchaddonPipe implements PipeTransform {

  transform(value: any[], searchText?: any): any {
    if(!value) return [];
    if(!searchText) return value;

    searchText = searchText.toLowerCase();

    return value.filter(value => {
      return value.addonDetails.toLowerCase().includes(searchText) || 
      value.addonPrice.toString().includes(searchText) ||
      value.addonName.toLowerCase().includes(searchText) ||
      value.addonType.toLowerCase().includes(searchText);
    });

  }

}
