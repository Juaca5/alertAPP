import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  muestras: any[];
  
    constructor(
      public navCtrl: NavController,
      public service: ServiceProvider)
    {
        this.getDatos();
    }
  
    getDatos()
    {
       this.service.getDataFechas().subscribe(
           data=> this.muestras = data,
           err=> console.log(err)
         );
    }
  }
