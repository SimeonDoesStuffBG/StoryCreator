import { Component, Input } from '@angular/core';
import Character from '../../../types/character';
@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss'
})
export class CharacterListComponent {
  @Input({required:true}) chars!: Character[];
}
