import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage{

  @ViewChild('map') mapElement: ElementRef;
  
  map: any;
  api: string = 'http://programaalerta.cl/alerta-app/provider.alerta.api/appalerta-api/'
  infoWindows: any;  

  constructor(
    public navCtrl: NavController,
    public http: Http){
      this.infoWindows = [];
 
  }
  ionViewDidLoad(){
  this.loadMap();
  //this.addMarker()
  this.getMarkers();
  }
  getMarkers() {
    this.http.get(this.api+'universidad.php')
    .map((res) => res.json())
    .subscribe(data => {
      this.addMarkersToMap(data);
    });
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

  addMarkersToMap(markers) {
    for(let marker of markers) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var dogwalkMarker = new google.maps.Marker({
        position: position,
        title: "<h3>"+marker.name+"</h3>"+"<p>"+marker.address+"</p>"
        //icon: 'assets/images/marker.png'
      });
      dogwalkMarker.setMap(this.map);
      this.addInfoWindowToMarker(dogwalkMarker);
    }
  }
  
  addInfoWindowToMarker(marker) {
    var infoWindowContent = marker.title;
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }
}