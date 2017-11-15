import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import { HomePage } from '../home/home';

/**
 * Generated class for the AskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {
 
  constructor(
    public navCtrl: NavController, 
    public NavParams:NavParams, 
    public service: ServiceProvider, 
    public alertCtrl: AlertController) {}
 
	  envioDato( req)
	  {
	  		this.service.dataRequire(req.value)
	  		.subscribe(
	  			 data=> {
	  			 		this.showAlert(data.mensaje);
	  			 		this.navCtrl.setRoot(HomePage);
	  			 		console.log(data.mensaje)
	  			 },
	  			 err=>console.log(err)
	  		);
	  }
 
	  showAlert(men)
	  {	
	  		let alert = this.alertCtrl.create({
	  				title: 'Informacion',
	  				subTitle: men,
	  				buttons :['OK']
	  		});
	  		alert.present();	
	  }
 
}