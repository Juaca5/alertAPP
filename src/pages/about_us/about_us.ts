import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';


@Component({
  selector: 'page-about_us',
  templateUrl: 'about_us.html'
})
export class AboutUsPage {
  
  encargados: any[];

  constructor(
    public navCtrl: NavController,
    public service: ServiceProvider)
  {
  		this.getDatos();
  }

  getDatos()
  {
  	 this.service.getDataEncargado().subscribe(
  	 		data=> this.encargados = data,
  	 		err=> console.log(err)
       );
  }
}


