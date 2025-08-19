import { Component, Input } from '@angular/core';
import Character from '../../../types/character';
import { containsFilter } from '../../../helpers/filter';
@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  @Input({required:true}) characters: Character[]=[];
  filterStr:string = "";
  constructor(){}
  filterCaracters = (character:Character)=>{
    return containsFilter(character.name, this.filterStr);
  };


}
