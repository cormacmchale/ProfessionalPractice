import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, Environment, GoogleMapOptions, GoogleMapsEvent, Marker } from "@ionic-native/google-maps/ngx";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  map: GoogleMap;
  constructor(private platform: Platform){

  }

  async ngOnInit(){
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap(){

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDQUaBvR0ZXMXsn-sPP6qhPw-qGFYmsTMs',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDQUaBvR0ZXMXsn-sPP6qhPw-qGFYmsTMs'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 53.270962,
           lng: -9.062691
         },
         zoom: 18,
         tilt: 30
       }
    };
    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Galway',
      snippet: 'teste',
      position: {
        lat: 53.270962,
        lng: -9.062691
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
   }
  }
