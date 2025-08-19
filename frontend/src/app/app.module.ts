import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { PagesModule } from "./pages/pages.module";
import GLobalComponentsModule from "./components/global-components/global-components.module";

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        GLobalComponentsModule,
        PagesModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}