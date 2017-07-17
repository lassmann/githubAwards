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
  language;
  worldRanking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking) {
    this.languages = this.githubRanking.getLanguages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldPage');
  }

  initializeItems() {
    this.languages = this.githubRanking.getLanguages();
  }

  searchWorldRanking() {
    this.githubRanking.getWorldRanking(this.language)
      .subscribe((data: any) => {
        if(data) {
          this.worldRanking = data;
          this.worldRanking.users.shift();
        }
      })
  }


}
