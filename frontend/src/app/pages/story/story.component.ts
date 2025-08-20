import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Story from '../../types/story';
import { stories } from '../../placeholders/placeholders';

@Component({
  selector: 'story-page',
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryPage {
  storyId:string = "";
  story?:Story;
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  constructor(){
    this.activatedRoute.params.subscribe(param=>{
      this.storyId = param["storyId"];
      this.story = stories.find(story=>story.id==this.storyId);
      if(!this.story){
        this.router.navigate(['']);
      }
    })
  }
}
