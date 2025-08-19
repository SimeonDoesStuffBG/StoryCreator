import { Component, Input } from '@angular/core';
import Story from '../../../types/story';

@Component({
  selector: 'story-list',
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss'
})
export class StoryListComponent {
  @Input({required:true})stories!:Story[];
}
