import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Character from '../../types/character';
import { characters } from '../../placeholders/placeholders';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterPage {
  charId:string="";
  character?:Character;
  private activeRoute = inject(ActivatedRoute);

  constructor(){
    this.activeRoute.params.subscribe(params=>{
      this.charId = params['charId'];
      this.character = characters.find(char=>char.id==parseInt(this.charId));
    })
  }
}
