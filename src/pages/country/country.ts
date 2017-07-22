import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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
  showList: boolean = false;
  items: string[];
  country = '';

  languages: string[];
  language;
  countryRanking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking) {
  }

  initializeItems() {
    this.items = this.githubRanking.getCountries();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

  searchCountryRanking() {
    this.githubRanking.getCountryRanking(this.country, this.language)
      .subscribe((data: any) => {
        if(data) {
          this.countryRanking = data;
          this.countryRanking.users.shift();
        }
      })
  }

  dismiss() {
    this.country = '';
    this.showList = false;
  }

  chooseItem(country: string) {
    this.country = country;
    this.showList = false;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if(val && val.trim() != '' && val.length > 2) {

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
