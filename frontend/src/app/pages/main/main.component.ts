import { Component } from '@angular/core';
import { characters } from '../../placeholders/placeholders';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainPage {
  characters=characters;
}
