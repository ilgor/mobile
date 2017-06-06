import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cars: any [];

  constructor(public navCtrl: NavController, public navParam: NavParams, public http: Http) {

  }

  ionViewDidLoad() {

    if (this.navParam.get('filteredCars')) {
      this.cars = this.navParam.get('cars');
    } else {
      this.http.get('assets/data/year_models.json')
        .map((res) => res.json())
        .subscribe(data => {
          this.cars = data;
        });
    }
    console.log(this.cars)
  }

  detailForSelected(car) {
    this.navCtrl.push(DetailPage, {
      car: car
    })
  }

}
