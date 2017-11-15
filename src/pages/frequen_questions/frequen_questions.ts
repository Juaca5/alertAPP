import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service-provider';
import { AskPage } from '../ask/ask';

@Component({
  selector: 'page-frequen_questions',
  templateUrl: 'frequen_questions.html'
})
export class FrequenQuestionPage {

  preguntas: any[];
  
    constructor(
      public navCtrl: NavController,
      public service: ServiceProvider)
    {
        this.getDatos();
    }
  
    getDatos()
    {
       this.service.getDataPreguntasFrecuentes().subscribe(
           data=> this.preguntas = data,
           err=> console.log(err)
         );
    }
    onClickAsk(){
      this.navCtrl.push(AskPage);
    }
  }
