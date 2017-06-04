import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthService } from '../utils/auth.service';
import { StorageService } from '../utils/storage.service';
import { QuestionList } from '../question/list/question.list';
import { QuestionCreate } from '../question/create/question.create';
import { QuestionDetail } from '../question/detail/question.detail';
import { QuestionService } from '../question/question.service';

import { FreeSoft } from '../contents/freesoftware/freesoft';
import { Biography } from '../contents/biography/biography';
import { Conference } from '../contents/conference/conference';

@NgModule({
  declarations: [
    MyApp,
    FreeSoft,
    Biography,
    Conference,
    QuestionList,
    QuestionDetail,
    QuestionCreate
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FreeSoft,
    Biography,
    Conference,
    QuestionList,
    QuestionDetail,
    QuestionCreate
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    StorageService,
    QuestionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
