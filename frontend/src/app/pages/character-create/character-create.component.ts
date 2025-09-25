import { Component } from '@angular/core';
import { stories } from '../../placeholders/placeholders';
import Story from '../../types/story';
import { SelectMenuItem } from '../../types/select-menu-item';

@Component({
  selector: 'character-create-page',
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.scss'
})
export class CharacterCreatePage {
  stories:Story[] = stories;
  selectedStories:Story[] = []

  addStory:(id:string)=>void = (id)=>{
    let storySel:Story|undefined = this.stories.find(story=>story.id===id);
    console.log(storySel);
    if(storySel)
      this.selectedStories.push(storySel)
  }

  removeStory:(story:Story)=>void = (story)=>{
    this.selectedStories = this.selectedStories.filter(s=>s.id!==story.id);
  }

  isStoryNotSelected = (story:Story)=>{
    return this.selectedStories.filter(s=>s.id===story.id).length==0;
  }

  storyToItem = (story:Story)=>{
    return {name:story.title, value:story.id} satisfies SelectMenuItem
  }
}
