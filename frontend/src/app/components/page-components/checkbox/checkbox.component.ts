import { Component, Input, model } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input({required:true})name:string=""
  @Input()enabled:boolean=true;
  checked=model<boolean>(true);
}
