import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterThumbnailComponent } from './character-thumbnail/character-thumbnail.component';
import { StoryThumbnailComponent } from './story-thumbnail/story-thumbnail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { StoryListComponent } from './story-list/story-list.component';
import { PipesModule } from '../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InfoChipComponent } from './info-chips/info-chips.component';



@NgModule({
  declarations: [
    CharacterThumbnailComponent,
    StoryThumbnailComponent, 
    CharacterListComponent,
    StoryListComponent,
    CheckboxComponent,
    InfoChipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule
  ],
  exports:[
    CharacterListComponent, 
    StoryListComponent,
    CheckboxComponent,
    InfoChipComponent
  ]
})
export class PageComponentsModule { }
