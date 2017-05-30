import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerDetailPage } from './dealer-detail';

@NgModule({
  declarations: [
    DealerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerDetailPage),
  ],
  exports: [
    DealerDetailPage
  ]
})
export class DealerDetailPageModule {}
