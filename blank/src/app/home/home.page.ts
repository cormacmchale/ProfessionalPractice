import { Component, ViewChild, OnInit } from "@angular/core";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker,
  Environment
} from "@ionic-native/google-maps/ngx";

import { Platform, NavController } from "@ionic/angular";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 map:GoogleMap;
  @ViewChild('map') element;

  constructor(public googleMaps: GoogleMaps, public plt: Platform,  public nav: NavController) { }
  
  
  async ngOnInit() {
   await  this.plt.ready();
     await  this.loadMap();
   
  } 
  loadMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDQUaBvR0ZXMXsn-sPP6qhPw-qGFYmsTMs',
        'API_KEY_FOR_BROWSER_DEBUG': ''
      });
    let map: GoogleMap = GoogleMaps.create('map_canvas');

    // map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {

    //   let coordinates: LatLng = new LatLng(33.6396965, -84.4304574);

    //   let position = {
    //     target: coordinates,
    //     zoom: 17
    //   };

    //   map.animateCamera(position);

    //   let markerOptions: MarkerOptions = {
    //     position: coordinates,
    //     icon: "assets/images/icons8-Marker-64.png",
    //     title: 'Our first POI'
    //   };

    //   const marker = map.addMarker(markerOptions)
    //     .then((marker: Marker) => {
    //       marker.showInfoWindow();
    //   });
    // })
  }
}
