import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Home --> ProgramPage
import { AboutUsPage } from '../about_us/about_us';
import { TeamPage } from '../team/team';


@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {

  constructor(public navCtrl: NavController) {

  }
  
  onClickAbout(){
    this.navCtrl.push(AboutUsPage);
  }
  
  onClickTeam(){
    this.navCtrl.push(TeamPage);
  }

}


