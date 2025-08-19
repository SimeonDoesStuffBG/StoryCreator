import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { MainPage } from './main/main.component';



@NgModule({
  declarations: [MainPage],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
