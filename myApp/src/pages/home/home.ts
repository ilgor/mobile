import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: any[];

  constructor(public navCtrl: NavController) {
    this.item = [];
    for(let i=0; i<10; i++) {
      this.item.push({
        text: 'Item ' + i,
        id: i
      })
    }
  }

  itemSelected(item) {
    alert(item.text)
  }

}
