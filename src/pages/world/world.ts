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
  items: { value: string }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking) {
    this.items = this.githubRanking.getLanguages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldPage');
  }

  initializeItems() {
    this.items = this.githubRanking.getLanguages();
  }

  getItems(event) {
    this.initializeItems();
    const val = event.target.value;

    if(val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.value.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
