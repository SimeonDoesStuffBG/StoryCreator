import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.component';
const routes: Routes = [
    {path:"", pathMatch:"full", component:MainPage}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:    [RouterModule]
})
export class AppRoutingModule{}