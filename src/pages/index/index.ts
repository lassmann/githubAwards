import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CountryPage} from '../country/country';
import {CityPage} from '../city/city';
import {WorldPage} from '../world/world';
import {UserDetailsPage} from '../user-details/user-details';

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  goToDetails() {
    this.navCtrl.push(UserDetailsPage);
  }

  goToWorld (){
    this.navCtrl.push(WorldPage);
  }

  goToCity (){
    this.navCtrl.push(CityPage);
  }

  gotoCountry(){
    this.navCtrl.push(CountryPage);
  }

}
