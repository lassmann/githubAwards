import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubRanking} from '../../providers/github-ranking/github-ranking'
import {UserDetailsPage} from '../user-details/user-details';

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
    this.city = this.city.replace(' ', '+');
    this.githubRanking.getCityRanking( this.city, this.language)
      .subscribe((data: any) => {
        if(data) {
          this.cityRanking = data.users;
          this.cityRanking.shift();
        }
      })
  }

  updateKey(event:any){
    let key = Object.keys(event)[0];
    this[key] = event[key];
  }

  gotoUser(username: string){
    this.navCtrl.push(UserDetailsPage, {username})
  }
}
