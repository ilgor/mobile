import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform} from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

@ViewChild('map') mapElement: ElementRef;
  map: any;
  lat: any = 42.316693699999995;
  long: any = -87.93783239999999;

  constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation) {
    platform.ready().then(() => {

      geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.loadMap(pos.coords.latitude, pos.coords.longitude);
      });

      // const watch = geolocation.watchPosition().subscribe(pos => {
      //   console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      // });
      //
      // watch.unsubscribe();

    });

  }


  ionViewDidLoad(){
    this.loadMap(this.lat, this.long);
  }

  loadMap(lat, long) {
    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
