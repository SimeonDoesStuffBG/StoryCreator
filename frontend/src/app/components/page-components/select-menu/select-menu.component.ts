import { Component, EventEmitter, Input, Output } from '@angular/core';
import { containsFilter } from '../../../helpers/filter';
import { SelectMenuItem } from '../../../types/select-menu-item';

@Component({
  selector: 'select-menu',
  templateUrl: './select-menu.component.html',
  styleUrl: './select-menu.component.scss'
})
export class SelectMenuComponent {
  @Input() name:String = "Dropdown"
  @Input({required:true}) items:SelectMenuItem[] = []
  @Output() itemSel = new EventEmitter();

  filterStr:string =""
  toggle(){
    document.querySelector("div#content")?.classList.toggle('hide')
  }

  filterItems = (item:SelectMenuItem)=>{
    return containsFilter(item.name, this.filterStr)
  }

  onSelectItem = (itemId:string)=>{
    this.itemSel.emit(itemId);
    this.toggle();
  }
}
