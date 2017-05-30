import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dealer-detail',
  templateUrl: 'dealer-detail.html',
})
export class DealerDetailPage {
  dealer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dealer = navParams.get('dealer');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealerDetailPage');
  }

}
