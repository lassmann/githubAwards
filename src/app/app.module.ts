import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import { CityPage } from '../pages/city/city';
import { CountryPage } from '../pages/country/country';
import { WorldPage } from '../pages/world/world';
import { ReposPage } from '../pages/repos/repos';
import { IndexPage } from '../pages/index/index';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { GithubUsers } from '../providers/github-users/github-users';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    OrganisationsPage,
    CityPage,
    CountryPage,
    WorldPage,
    IndexPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    OrganisationsPage,
    CityPage,
    CountryPage,
    WorldPage,
    IndexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers
  ]
})
export class AppModule {}
