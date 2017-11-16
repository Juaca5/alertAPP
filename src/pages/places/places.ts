
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage{
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
    this.addMarker()
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(-33.03436256243767, -71.56431524999999);
 
    let mapOptions = {
      center: latLng,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
  addMarker(){
    
     let marker = new google.maps.Marker({
       //icon: 'blue',
       map: this.map,
       animation: google.maps.Animation.DROP,
       position: {
         lat : -33.023157,
         lng : -71.6416195
        }
      });
      let content = "<h2>Universidad de Playa Ancha</h2>";
      this.addInfoWindowToMarker(marker,content);
    }
  addInfoWindowToMarker(marker,content) {
    var infoWindow = new google.maps.InfoWindow({
      content: content
    });
    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}