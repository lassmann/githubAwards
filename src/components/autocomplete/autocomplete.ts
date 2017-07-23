import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello AutocompleteComponent Component');
    this.text = 'Hello World';
  }

}
