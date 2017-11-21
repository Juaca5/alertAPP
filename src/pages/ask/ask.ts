import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
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
	
	data:any = {};
	resp:any;
	
	constructor(
		public navCtrl: NavController, 
		public http: Http, 
		private alertCtrl: AlertController) {
			this.data.username = '';
			this.data.useremail = '';
			this.data.usersubject = '';
			this.data.usermessage = '';

			this.data.response = '';
			this.http = http;
	}
	submit() {
		var link = 'http://programaalerta.cl/alerta-app/provider.alerta.api/appalerta-api/correo.php';
		var myData = JSON.stringify({
			username: this.data.username,
			useremail: this.data.useremail,
			usersubject: this.data.usersubject,
			usermessage: this.data.usermessage
		});
		this.http.post(link, myData)
		.subscribe(data => {
			 this.data.response = data["_body"];
			 //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
			}, error => {
				console.log("Oooops!");
		});
		let alert = this.alertCtrl.create({
			title: 'Mensaje enviado',
			subTitle: 'Tu mensaje a sido enviado, pronto te contactaremos',
			buttons: ['Aceptar']
		});
		alert.present();
		this.navCtrl.push(HomePage);
	}
}