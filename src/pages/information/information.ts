import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {

  imagenes: any[];
  
    constructor(
      public navCtrl: NavController,
      public service: ServiceProvider)
    {
        this.getDatos();
    }
  
    getDatos()
    {
       this.service.getDataImage().subscribe(
           data=> this.imagenes = data,
           err=> console.log(err)
         );
    }
  }