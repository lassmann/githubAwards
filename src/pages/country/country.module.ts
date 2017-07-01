import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryPage } from './country';

@NgModule({
  declarations: [
    CountryPage,
  ],
  imports: [
    IonicPageModule.forChild(CountryPage),
  ],
  exports: [
    CountryPage
  ]
})
export class CountryPageModule {}
