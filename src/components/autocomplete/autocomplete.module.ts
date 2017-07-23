import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutocompleteComponent } from './autocomplete';

@NgModule({
  declarations: [
    AutocompleteComponent,
  ],
  imports: [
    IonicPageModule.forChild(AutocompleteComponent),
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteComponentModule {}
