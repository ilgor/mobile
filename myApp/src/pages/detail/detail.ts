import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Detail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
        yeild: 0
      },
      {
        name: 'Premium',
        yeild: 10
      },
      {
        name: 'Premuim Plus',
        yeild: 15
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail');
  }

}
