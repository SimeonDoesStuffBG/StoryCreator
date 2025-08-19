import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main/main.component';
import { PageComponentsModule } from '../components/page-components/page-components.module';



@NgModule({
  declarations: [MainPage],
  imports: [
    CommonModule,
    PageComponentsModule
  ]
})
export class PagesModule { }
