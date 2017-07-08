import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubRanking} from '../../providers/github-ranking/github-ranking'

/**
 * Generated class for the UserDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  username:string = '';
  userdata: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

  searchUsername (username:string){
    this.githubRanking.getUserRanking(this.username)
      .subscribe(data => {
        console.log('test', data)
          this.userdata = data
      })
  }

}
