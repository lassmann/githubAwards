import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the AutocompleteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'autocomplete',
  templateUrl: 'autocomplete.html'
})
export class AutocompleteComponent {
  @Input() list: string[];
  @Input() placeholder: string;
  @Output() selectedItem = new EventEmitter();
  text: string;
  items: string[];
  item: string = '';
  showList: boolean = false;

  constructor() {
    this.items = this.list;
  }

  initializeItems() {
    this.items = this.list;
  }

  chooseItem(item: string){
    this.selectedItem.emit(item);
    this.item = item;
    this.showList = false;
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      // Filter the items
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      // Show the results
      this.showList = true;
    } else {
      // hide the results when the query is empty
      this.showList = false;
    }
  }


}
