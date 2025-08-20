import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Story from '../../types/story';
import { stories } from '../../placeholders/placeholders';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryPage {
  storyId:string = "";
  story?:Story;
  private activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.activatedRoute.params.subscribe(param=>{
      this.storyId = param["storyId"];
      this.story = stories.find(story=>story.id==parseInt(this.storyId));
    })
  }
}
