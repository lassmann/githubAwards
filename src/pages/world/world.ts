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

  constructor(public navCtrl: NavController, public navParams: NavParams, githubRanking: GithubRanking) {
    console.log('test', githubRanking.getLanguages())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldPage');
  }

}
