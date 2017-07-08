 import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListLanguageComponent } from './list-language';

@NgModule({
  declarations: [
    ListLanguageComponent,
  ],
  imports: [
    IonicPageModule.forChild(ListLanguageComponent),
  ],
  exports: [
    ListLanguageComponent
  ]
})
export class ListLanguageComponentModule {}
