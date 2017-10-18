import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProgramPage } from '../program/program';
import { QuestionPage } from '../questions/questions';
import { SamplingPage } from '../sampling/sampling';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  onClickProgram(){
    this.navCtrl.push(ProgramPage);
  }
  
  onClickQuestion(){
    this.navCtrl.push(QuestionPage);
  
  }
  
  onClickSampling(){
    this.navCtrl.push(SamplingPage);
  
  }


}
