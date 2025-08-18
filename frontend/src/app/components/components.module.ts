import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatacterThumbnailComponent } from './chatacter-thumbnail/chatacter-thumbnail.component';
import { StoryThumbnailComponent } from './story-thumbnail/story-thumbnail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChatacterThumbnailComponent, StoryThumbnailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ChatacterThumbnailComponent, StoryThumbnailComponent]
})
export class ComponentsModule { }
