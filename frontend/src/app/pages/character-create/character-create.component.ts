import { Component } from '@angular/core';
import { stories } from '../../placeholders/placeholders';
import Story from '../../types/story';

@Component({
  selector: 'character-create-page',
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.scss'
})
export class CharacterCreatePage {
  stories:Story[] = stories;
  selectedStories:Story[] = [{id:"2", title:"Lord of The Rings", creator:"J.R.R Tolkien"},
    {id:"3", title:"God Emperor of Dune", creator:"Frank Herbert"}, 
    {id:"4", title:"The First Men In The Moon", creator:"H.G. Wells"},]

  addStory:(event:Event)=>void = (event)=>{
    console.log(event.target)
    //this.selectedStories.push(story)
  }

  removeStory:(story:Story)=>void = (story)=>{
    this.selectedStories = this.selectedStories.filter(s=>s.id!==story.id);
  }

  isStoryNotSelected = (story:Story)=>{
    return this.selectedStories.filter(s=>s.id===story.id).length==0;
  }
}
