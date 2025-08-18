import { Component } from '@angular/core';
import { characters } from './placeholders/placeholders';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  characters=characters;
  title = 'frontend';
}
