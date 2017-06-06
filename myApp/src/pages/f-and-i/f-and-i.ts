import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DealerInfoPage} from "../dealer-info/dealer-info";

/**
 * Generated class for the FAndIPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-f-and-i',
  templateUrl: 'f-and-i.html',
})
export class FAndIPage {
  car: any;
  options: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.car = this.navParams.get("car");

    this.options = [
      {
        name: 'Audi Care',
        yeild: 100,
        selected: false
      },
      {
        name: 'Audi Care Plus',
        yeild: 150,
        selected: false
      },
      {
        name: 'Audi Pure Protection',
        yeild: 200,
        selected: false
      }
    ];
  }

  ionViewWillEnter() {
    // this.car = this.navParams.get("car");
    console.log('ionViewDidLoad FAndIPage');
  }

  showDealerInfo(car) {
    this.navCtrl.push(DealerInfoPage, {
      car: car
    })
  }
}
