import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import { CityPage } from '../pages/city/city';
import { CountryPage } from '../pages/country/country';
import { WorldPage } from '../pages/world/world';
import { IndexPage } from '../pages/index/index';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { GithubRanking } from '../providers/github-ranking/github-ranking'

@NgModule({
  declarations: [
    MyApp,
    UserDetailsPage,
    CityPage,
    CountryPage,
    WorldPage,
    IndexPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserDetailsPage,
    CityPage,
    CountryPage,
    WorldPage,
    IndexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubRanking,
    AdMobFree
  ]
})
export class AppModule {}
