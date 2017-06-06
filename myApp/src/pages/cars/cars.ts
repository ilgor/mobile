import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {DetailPage} from "../detail/detail";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-cars',
  templateUrl: 'cars.html',
})
export class CarsPage {
  cars: any = [];
  models: any = [];
  carSelected = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarsPage');

    this.http.get('assets/data/year_models.json')
    .map((res) => res.json())
    .subscribe(data => {
      this.cars = data;
      this.models = this.distincCarModels(data);
    });

    console.log(this.cars)
  }

  distincCarModels(data) {
    var distincModels = [];

    for (let d of data) {
      if (distincModels.indexOf(d.model) == -1){
        distincModels.push(d.model)
      }
    }

    return distincModels;
  }

  modelSelected(car) {
    this.carSelected = "../../assets/images/" + car + ".jpg";
  }

  getCarDetails(car) {
    this.navCtrl.push(HomePage, {
      filteredCars: true,
      cars: this.filterCars(car)
    })
  }

  filterCars(chosenCar) {
    var filteredCars = [];

    for (let car of this.cars) {
      if (car.model == chosenCar) {
        filteredCars.push(car);
      }
    }

    return filteredCars;
  }


}
