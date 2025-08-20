import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import Story from '../../../types/story';

@Component({
  selector: 'story-thumbnail',
  templateUrl: './story-thumbnail.component.html',
  styleUrl: './story-thumbnail.component.scss'
})
export class StoryThumbnailComponent {
  @Input({required:true})story!:Story;
  get title(){
    return this.story.title;
  }
  get creator(){
    return this.story.creator;
  }
}
