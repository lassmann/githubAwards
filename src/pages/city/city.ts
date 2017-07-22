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
  city = '';
  languages: string[];
  language;
  cityRanking: any;
  showList: boolean = false;
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking) {
  }

  initializeItems() {
    this.items = this.githubRanking.getCities();
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

  dismiss(){
    this.city = '';
    this.showList = false;
  }

  chooseItem(city: string){
    this.city = city;
    this.showList = false;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '' && val.length > 2) {

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
