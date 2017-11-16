import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProgramPage } from '../program/program';
import { SamplingPage } from '../sampling/sampling';
import { FrequenQuestionPage } from '../frequen_questions/frequen_questions';
import { InformationPage } from '../information/information';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onClickSampling(){
    this.navCtrl.push(SamplingPage);
  }
  onClickProgram(){
    this.navCtrl.push(ProgramPage);
  }
  onClickQuestion(){
    this.navCtrl.push(FrequenQuestionPage);
  }
  onClickInfo(){
    this.navCtrl.push(InformationPage);
  }
}
