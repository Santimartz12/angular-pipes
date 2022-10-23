import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(value: boolean) {
    if(value == true){
      return "vuela"
    }
    return "no vuela"
  }

}
