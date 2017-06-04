import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { QuestionList } from '../question/list/question.list';
import { QuestionDetail } from '../question/detail/question.detail';
import { QuestionService } from '../question/question.service';

@NgModule({
  declarations: [
    MyApp,
    QuestionList,
    QuestionDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuestionList,
    QuestionDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
