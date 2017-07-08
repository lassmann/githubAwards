import { Component } from '@angular/core';
import {GithubRanking} from '../../providers/github-ranking/github-ranking'

/**
 * Generated class for the ListLanguageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-language',
  templateUrl: 'list-language.html'
})
export class ListLanguageComponent {
  items: { value: string }[];

  constructor(public githubRanking: GithubRanking) {
    this.items = this.githubRanking.getLanguages();
  }


  initializeItems() {
    this.items = this.githubRanking.getLanguages();
  }

  getItems(event) {
    this.initializeItems();
    const val = event.target.value;

    if(val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
