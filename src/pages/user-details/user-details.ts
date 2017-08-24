import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GithubRanking } from '../../providers/github-ranking/github-ranking'

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
  username: string = '';
  userdata: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubRanking: GithubRanking, private loadingCtrl: LoadingController) {
    this.username = navParams.get("username");
    if(this.username) this.searchUsername(this.username);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

  ngOnInit() {
    // console.log('test', this.username)
  }

  loadingPopup = this.loadingCtrl.create({
    content: 'Loading...'
  });

  searchUsername(username: string) {
    this.loadingPopup.present();
    this.githubRanking.getUserRanking(this.username)
      .subscribe(data => {
        this.userdata = data;
        this.loadingPopup.dismiss();
      })
  }

}
