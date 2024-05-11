import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityState',
  standalone: true
})
export class QuantityStatePipe implements PipeTransform {

  transform(value:number): any {
    if(value==0)
    return 'out of stock'
    else if(value==1)
    return 'last one'
    return value
  }

}
