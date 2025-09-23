import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'info-chip',
  templateUrl: './info-chips.component.html',
  styleUrl: './info-chips.component.scss'
})
export class InfoChipComponent {
  @Input() imgLink:string = ""
  @Input({required:true}) text:string = ""
  @Output() chpDelete = new EventEmitter();

  onDelete(){
    this.chpDelete.emit();
  }
}
