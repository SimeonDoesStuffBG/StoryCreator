import { Component, Input } from '@angular/core';
import Character from '../../types/character';

@Component({
  selector: 'character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrl: './character-thumbnail.component.scss'
})
export class CharacterThumbnailComponent {
  @Input({required:true}) character!:Character;
}
