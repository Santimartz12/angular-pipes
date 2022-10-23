import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform{

    transform(value: string, enMayusculas: boolean = true): string {
        
        // if(enMayusculas == true){
        //     return value.toUpperCase();
        // }
        // return value;

        return (enMayusculas == true) ? (value.toUpperCase()) : (value);

    }

}