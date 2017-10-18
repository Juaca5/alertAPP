import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ServiceProvider } from '../providers/service-provider';

import { MyApp } from './app.component';

// Home
import { HomePage } from '../pages/home/home';

// Home -->
import { ProgramPage } from '../pages/program/program';
import { SamplingPage } from '../pages/sampling/sampling';
import { QuestionPage } from '../pages/questions/questions';

// Home --> ProgramPage
import { AboutUsPage } from '../pages/about_us/about_us';
import { InformationPage } from '../pages/information/information';

// Home --> SamplingPage
import { CalendarPage } from '../pages/calendar/calendar';
import { PlacesPage } from '../pages/places/places';

// Home --> FrequenQuestionPage
import { FrequenQuestionPage } from '../pages/frequen_questions/frequen_questions';
import { RequestPage } from '../pages/resquest/resquest';

// Home --> others
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
      MyApp,
      HomePage,
      ProgramPage,
      SamplingPage,
      QuestionPage,
      AboutUsPage ,
      InformationPage,
      CalendarPage,
      PlacesPage,
      FrequenQuestionPage,
      RequestPage,
      ListPage 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      HomePage,
      ProgramPage,
      SamplingPage,
      QuestionPage,
      AboutUsPage ,
      InformationPage,
      CalendarPage,
      PlacesPage,
      FrequenQuestionPage,
      RequestPage,
      ListPage
  ],
  providers: [
    ServiceProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
