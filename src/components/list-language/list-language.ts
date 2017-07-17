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
  languages: string[];

  constructor(public githubRanking: GithubRanking) {
    this.languages = this.githubRanking.getLanguages();
  }


  initializeItems() {
    this.languages = this.githubRanking.getLanguages();
  }

  getItems(event) {
    this.initializeItems();
    const val = event.target.value;

    if(val && val.trim() != '') {
      this.languages = this.languages.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
