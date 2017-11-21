import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Home
import { HomePage } from '../pages/home/home';

// Home -->
import { ProgramPage } from '../pages/program/program';
import { SamplingPage } from '../pages/sampling/sampling';
import { InformationPage } from '../pages/information/information';

// Home --> ProgramPage
import { AboutUsPage } from '../pages/about_us/about_us';
import { TeamPage } from '../pages/team/team';

// Home --> SamplingPage
import { CalendarPage } from '../pages/calendar/calendar';
import { PlacesPage } from '../pages/places/places';

// Home --> FrequenQuestionPage
import { FrequenQuestionPage } from '../pages/frequen_questions/frequen_questions';
import { AskPage } from '../pages/ask/ask';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Program', component: ProgramPage },
        { title: 'Sampling', component: SamplingPage },
        { title: 'AboutUs', component: AboutUsPage  },
        { title: 'Information', component: InformationPage },
        { title: 'Calendar', component: CalendarPage },
        { title: 'Places', component: PlacesPage },
        { title: 'FrequenQuestions', component: FrequenQuestionPage },
        { title: 'Ask', component: AskPage },
        { title: 'Team', component: TeamPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
