import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-dealer-info',
  templateUrl: 'dealer-info.html',
})
export class DealerInfoPage {
  car: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.car = navParams.get('car');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealerInfoPage');
  }

}
