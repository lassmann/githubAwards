import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {GithubRanking} from '../../providers/github-ranking/github-ranking'
import {UserDetailsPage} from '../user-details/user-details';

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
  countries: string[];
  country = '';
  language = '';
  countryRanking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking, private loadingCtrl: LoadingController) {
    this.languages = this.githubRanking.getLanguages();
    this.countries = this.githubRanking.getCountries();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

  loadingPopup = this.loadingCtrl.create({
    content: 'Loading...'
  });

  searchCountryRanking() {
    this.loadingPopup.present();
    this.country = this.country.replace(' ', '+');
    this.githubRanking.getCountryRanking(this.country, this.language)
      .subscribe((data: any) => {
        if(data) {
          this.countryRanking = data.users;
          this.countryRanking.shift();
          this.loadingPopup.dismiss();
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
