import { Pipe, PipeTransform } from "@angular/core";
import { containsFilter } from "../helpers/filter";

@Pipe({
    name: "filter",
    pure:false
})
export class FilterPipe implements PipeTransform{
    transform(array:any[], filter:(item:any)=>boolean){
        return array.filter(item=>filter(item));
    }
}