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
  @Input() key: string;
  @Input() placeholder: string;
  @Output() selectedItem = new EventEmitter();
  items: string[];
  item: string = '';
  showList: boolean = false;
  output: any = {};


  constructor() { }

  ngOnInit() {  }

  dismiss(){
    this.item = '';
    this.showList = false;
  }

  initializeItems() {
    this.items = this.list;
  }

  chooseItem(item: string){
    this.selectedItem.emit(this.output[this.key] = item );

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
      this.output[this.key] = val;
      this.selectedItem.emit(this.output );

      // Show the results
      this.showList = true;
    } else {
      // hide the results when the query is empty
      this.showList = false;
    }
  }


}
