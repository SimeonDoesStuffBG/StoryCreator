import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.component';
import { CharacterPage } from './pages/character/character.component';
import { StoryPage } from './pages/story/story.component';
import { SignInPage } from './pages/sign-in/sign-in.component';
import { LogInPage } from './pages/log-in/log-in.component';
import { CharacterCreatePage } from './pages/character-create/character-create.component';
const routes: Routes = [
    {path:"", pathMatch:"full", component:MainPage},
    {path:"character", children:[
        {path:"create", component:CharacterCreatePage},
        {path:":charId", component:CharacterPage}
        ]
    },
    {path:"story", children:[
        {path:":storyId",component:StoryPage}
        ] 
    },
    {path:"signin", component:SignInPage},
    {path:"login", component:LogInPage}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:    [RouterModule]
})
export class AppRoutingModule{}