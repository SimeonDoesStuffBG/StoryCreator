import { NgModule } from "@angular/core";
import { FilterPipe } from "./filter.pipe";
import { MapToItemPipe } from "./map-item.pipe";

@NgModule({
    declarations:[FilterPipe, MapToItemPipe],
    imports:[],
    exports:[FilterPipe, MapToItemPipe]
})
export class PipesModule{};