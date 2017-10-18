import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServiceProvider {

	api:string = 'http://palerta.esy.es/provider.alerta.api/appalerta-api/'	

  constructor(public http: Http) {
  }

	  getDataEncargado(){
		  return this.http.get(this.api+'encargado.php').map(res=>res.json())
	  }
	  getDataPreguntasFrecuentes(){
		  return this.http.get(this.api+'preguntasfrecuentes.php').map(res=>res.json())
	  }
	  dataRegister(parans)
	  {
	  		let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});
	  		return this.http.post(this.api + "mail.php",parans,
							  	{
							  		headers: headers,
							  		method:"POST"
							  	}).map(
							  		(res:Response)=> {return res.json();}	
							  	);
	  }

}
