import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FAndIPage} from "../f-and-i/f-and-i";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  car: any;
  options: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.car = navParams.get('car');
    this.options = [
      {
        name: 'Base',
        yeild: 0,
        selected: false
      },
      {
        name: 'Premium',
        yeild: 10,
        selected: false
      },
      {
        name: 'Premuim Plus',
        yeild: 15,
        selected: false
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail');
  }

  chooseFAndI(carInfo) {
    this.navCtrl.push(FAndIPage, {
      car: carInfo
    })
  }

}
