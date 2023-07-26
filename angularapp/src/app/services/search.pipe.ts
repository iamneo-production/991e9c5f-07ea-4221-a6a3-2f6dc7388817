import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText?: any): any {
    if(!value) return [];
    if(!searchText) return value;

    searchText = searchText.toLowerCase();


    return value.filter(value => {
      return value.planDetails.toLowerCase().includes(searchText) || 
      value.planName.toLowerCase().includes(searchText) || 
      value.planPrice.toLowerCase().includes(searchText) ||
      value.planType.toLowerCase().includes(searchText) ||
      value.planValidity.toLowerCase().includes(searchText) ;
    });
  }

}
