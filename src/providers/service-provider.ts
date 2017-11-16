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

	api:string = 'http://programaalerta.cl/alerta-app/provider.alerta.api/appalerta-api/'	

  constructor(public http: Http) {
  }

	  getDataEncargado(){
			return this.http.get(
				this.api+'encargado.php').map(res=>res.json())
	  }
	  getDataPreguntasFrecuentes(){
				return this.http.get(
					this.api+'preguntasfrecuentes.php').map(res=>res.json())
	  }
	  getDataFechas(){
				return this.http.get(
					this.api+'tomademuestra.php').map(res=>res.json())
	  }
	  getDataUniversidad(){
		return this.http.get(
			this.api+'universidad.php').map(res=>res.json())
	  }
	  dataRequire(parans){
	  		let headers = new Headers ({'Content-Type':'application/x-www-form-urlencoded'});
	  		return this.http.post("http://www.programaalerta.cl/alerta-app/prueba/correo/correo.php",parans,
							  	{
							  		headers: headers,
							  		method:"POST"
							  	}).map(
							  		(res:Response)=> {return res.json();}	
							  	);
	  }

}
