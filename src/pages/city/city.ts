import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubRanking} from '../../providers/github-ranking/github-ranking'

/**
 * Generated class for the CityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
  languages: string[];
  cities: string[];
  city = '';
  language;
  cityRanking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking) {
    this.languages = this.githubRanking.getLanguages();
    this.cities = this.githubRanking.getCities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

  searchCityRanking() {
    this.githubRanking.getWorldRanking(this.language)
      .subscribe((data: any) => {
        if(data) {
          this.cityRanking = data;
          this.cityRanking.users.shift();
        }
      })
  }

  updateKey(event:any, key: string){
    this[key] = event.key;
    console.log('test', this.language)
  }

}
