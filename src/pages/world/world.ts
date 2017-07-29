import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GithubRanking} from '../../providers/github-ranking/github-ranking'
/**
 * Generated class for the WorldPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-world',
  templateUrl: 'world.html',
})
export class WorldPage {
  languages: string[];
  worldRanking: any;
  language: string = '';
  showList: boolean = false;
  // items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking) {
    this.languages = this.githubRanking.getLanguages();
  }

  initializeItems() {
    this.languages = this.githubRanking.getLanguages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldPage');
  }

  searchWorldRanking() {
    this.githubRanking.getWorldRanking(this.language)
      .subscribe((data: any) => {
        if(data) {
          this.worldRanking = data;
          this.worldRanking.users.shift();
          console.log('test', this.worldRanking)
        }
      })
  }

  dismiss(){
    this.language = '';
    this.showList = false;
  }

  chooseLanguage(language: string){
    this.language = language;
    this.showList = false;
  }

  updateLanguage(event){
    console.log('test', event)
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      // Filter the items
      this.languages = this.languages.filter((language) => {
        return (language.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      // Show the results
      this.showList = true;
    } else {

      // hide the results when the query is empty
      this.showList = false;
    }
  }


}
