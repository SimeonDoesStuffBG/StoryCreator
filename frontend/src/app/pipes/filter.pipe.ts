import { Pipe, PipeTransform } from "@angular/core";
import { containsFilter } from "../helpers/filter";

@Pipe({
    name: "filter",
    pure:false
})
export class FilterPipe implements PipeTransform{
    transform<T>(array:T[], filter:(item:T)=>boolean){
        return array.filter(item=>filter(item));
    }
}