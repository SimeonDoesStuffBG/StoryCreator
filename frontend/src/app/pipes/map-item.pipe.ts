import { Pipe, PipeTransform } from "@angular/core";
import { SelectMenuItem } from "../types/select-menu-item";

@Pipe({
    name: 'mapToItem'
}
)
export class MapToItemPipe implements PipeTransform{
    transform<T>(array:T[], transformFunc:(item:T)=>SelectMenuItem):SelectMenuItem[] {
        return array.map(transformFunc);
    }
}