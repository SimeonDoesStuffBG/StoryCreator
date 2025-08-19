import { Component } from '@angular/core';
import { characters } from '../../placeholders/placeholders';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainPage {
  characters=characters;
}
