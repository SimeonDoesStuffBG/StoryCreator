import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main/main.component';
import { PageComponentsModule } from '../components/page-components/page-components.module';
import { CharacterPage } from './character/character.component';
import { StoryPage } from './story/story.component';
import { AppRoutingModule } from '../app-routing.module';
import { LogInPage } from './log-in/log-in.component';
import { SignInPage } from './sign-in/sign-in.component';
import { CharacterCreatePage } from './character-create/character-create.component';



@NgModule({
  declarations: [
    MainPage, 
    CharacterPage, 
    StoryPage, 
    LogInPage, 
    SignInPage,
    CharacterCreatePage
  ],
  imports: [
    CommonModule,
    PageComponentsModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
