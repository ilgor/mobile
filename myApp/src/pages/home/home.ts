import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cars: any [];

  constructor(public navCtrl: NavController) {
    this.cars = [
      {
        model: 'A4',
        description: 'e-tron',
        price: 34000,
        image: '/assets/images/A4.jpg'
      },
      {
        model: 'A5',
        price: 54000,
        description: '2.0 TFSI',
        image: '/assets/images/A5.jpg'
      },
      {
        model: 'R8',
        price: 154000,
        description: 'V10 Plus',
        image: '/assets/images/R8.jpg'
      },
      {
        model: 'Q5',
        price: 44000,
        description: '2.0 TFSI',
        image: '/assets/images/Q5.jpg'
      },
      {
        model: 'Q7',
        price: 56000,
        description: '3.0 TFSI',
        image: '/assets/images/Q7.jpg'
      }
    ];
  }

  detailForSelected(car) {
    this.navCtrl.push(DetailPage, {
      car: car
    })
  }

}
