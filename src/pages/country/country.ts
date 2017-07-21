import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubRanking} from '../../providers/github-ranking/github-ranking'

/**
 * Generated class for the CountryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {
  languages: string[];
  language;
  countryRanking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

  searchCountryRanking() {
    this.githubRanking.getWorldRanking(this.language)
      .subscribe((data: any) => {
        if(data) {
          this.countryRanking = data;
          this.countryRanking.users.shift();
        }
      })
  }

}
