import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'story-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './story-thumbnail.component.html',
  styleUrl: './story-thumbnail.component.scss'
})
export class StoryThumbnailComponent {

}
