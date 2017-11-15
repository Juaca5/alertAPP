import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalendarPage } from '../calendar/calendar';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-sampling',
  templateUrl: 'sampling.html'
})
export class SamplingPage {

  constructor(public navCtrl: NavController) {

  }
  onClickCalendar(){
    this.navCtrl.push(CalendarPage);
  }
  onClickPlaces(){
    this.navCtrl.push(PlacesPage);
  }

}
