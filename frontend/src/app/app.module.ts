import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { PagesModule } from "./pages/pages.module";

@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        PagesModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}