import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatacterThumbnailComponent } from './chatacter-thumbnail/chatacter-thumbnail.component';
import { StoryThumbnailComponent } from './story-thumbnail/story-thumbnail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ChatacterThumbnailComponent, 
    StoryThumbnailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
