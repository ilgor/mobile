import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, Platform} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DealerDetailPage } from "../dealer-detail/dealer-detail";
import {timeout} from "rxjs/operator/timeout";
import {HomePage} from "../home/home";

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('mapContainer') mapContainer: ElementRef;
  map: any;
  infoWindows: any;
  currentDealer = "";

  icon = {
    url: "assets/images/audi.png", // url
    scaledSize: new google.maps.Size(70, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  constructor(public navCtrl: NavController, public http: Http) {
     this.infoWindows = [];
  }

  // ionViewWillEnter() {
  ionViewDidLoad() {
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    let latLng = new google.maps.LatLng(42.316693699999995, -87.93783239999999);

    let mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    this.http.get('assets/data/markers.json')
    .map((res) => res.json())
    .subscribe(data => {
      this.addMarkersToMap(data);
    });
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var dealers = new google.maps.Marker({
        position: position,
        title: marker.name,
        icon: this.icon,
        animation: google.maps.Animation.DROP
      });
      dealers.setMap(this.map);
      this.addInfoWindowToMarker(dealers);
    }
  }

  addInfoWindowToMarker(marker) {
    var infoWindowContent = '<div id="myInfoWinDiv">'+ marker.title +'</div>';  // '<div id="content"><h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.toggleBounce(marker);
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });

    infoWindow.addListener('click', () => {
      debugger;
        this.navCtrl.push(HomePage);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function() {
         marker.setAnimation(null)
      }, 1450);
    }

    if (this.currentDealer == marker.title) {
      this.navCtrl.push(HomePage);
    }
    else {
      this.currentDealer = marker.title;
    }
  }
}

