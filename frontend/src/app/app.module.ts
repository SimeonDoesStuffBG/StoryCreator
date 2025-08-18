import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        ComponentsModule,
        AppRoutingModule
    ]
})
export class AppModule {}