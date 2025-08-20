import { Component, Input } from '@angular/core';
import Story from '../../../types/story';
import { containsFilter } from '../../../helpers/filter';

@Component({
  selector: 'story-list',
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss'
})
export class StoryListComponent {
  @Input({required:true})stories!:Story[];
  filter:string= "";
  filterStories = (story:Story)=>{
    return containsFilter(story.title, this.filter);
  }
}
