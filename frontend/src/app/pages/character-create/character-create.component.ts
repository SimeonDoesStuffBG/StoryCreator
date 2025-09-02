import { Component } from '@angular/core';
import { stories } from '../../placeholders/placeholders';

@Component({
  selector: 'character-create-page',
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.scss'
})
export class CharacterCreatePage {
  stories = stories;
}
