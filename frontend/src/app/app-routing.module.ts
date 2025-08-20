import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.component';
import { CharacterPage } from './pages/character/character.component';
import { StoryPage } from './pages/story/story.component';
const routes: Routes = [
    {path:"", pathMatch:"full", component:MainPage},
    {path:"character/:charId", component:CharacterPage},
    {path:"story/:storyId", component:StoryPage}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:    [RouterModule]
})
export class AppRoutingModule{}