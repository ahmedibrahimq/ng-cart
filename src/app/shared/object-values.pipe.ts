import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'values'
})
export class ObjectValuesPipe implements PipeTransform {

  transform(value: any): any[] {
    return Object.values(value);
  }

}
