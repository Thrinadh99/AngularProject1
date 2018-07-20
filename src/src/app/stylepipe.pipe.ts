import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stylify'
})
export class stylePipe {
  transform(value: any, options: any) {
     //return value = value.toUpperCase();
      value = value.substr(0, options)+ '...';
      return value = value.toUpperCase();
  }
}