import { Component } from '@angular/core';
import { NgClass } from "../../../node_modules/@angular/common/index";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'chatacter-thumbnail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chatacter-thumbnail.component.html',
  styleUrl: './chatacter-thumbnail.component.scss'
})
export class ChatacterThumbnailComponent {

}
