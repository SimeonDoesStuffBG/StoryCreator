import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        ComponentsModule,
        AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}