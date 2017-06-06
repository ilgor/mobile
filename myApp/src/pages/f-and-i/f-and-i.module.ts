import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FAndIPage } from './f-and-i';

@NgModule({
  declarations: [
    FAndIPage,
  ],
  imports: [
    IonicPageModule.forChild(FAndIPage),
  ],
  exports: [
    FAndIPage
  ]
})
export class FAndIPageModule {}
