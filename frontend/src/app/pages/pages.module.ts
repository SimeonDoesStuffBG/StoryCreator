import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main/main.component';
import { PageComponentsModule } from '../components/page-components/page-components.module';
import { CharacterPage } from './character/character.component';



@NgModule({
  declarations: [MainPage, CharacterPage],
  imports: [
    CommonModule,
    PageComponentsModule
  ]
})
export class PagesModule { }
