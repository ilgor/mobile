import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerInfoPage } from './dealer-info';

@NgModule({
  declarations: [
    DealerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerInfoPage),
  ],
  exports: [
    DealerInfoPage
  ]
})
export class DealerInfoPageModule {}
