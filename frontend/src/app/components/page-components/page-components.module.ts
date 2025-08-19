import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterThumbnailComponent } from './character-thumbnail/character-thumbnail.component';
import { StoryThumbnailComponent } from './story-thumbnail/story-thumbnail.component';
import { CharacterListComponent } from './character-list/character-list.component';



@NgModule({
  declarations: [CharacterThumbnailComponent, StoryThumbnailComponent, CharacterListComponent],
  imports: [
    CommonModule
  ],
  exports:[CharacterListComponent, StoryThumbnailComponent]
})
export class PageComponentsModule { }
