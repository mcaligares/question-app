import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../utils/auth.service';
import { Biography } from '../contents/biography/biography';
import { Conference } from '../contents/conference/conference';
import { FreeSoft } from '../contents/freesoftware/freesoft';
import { QuestionList } from '../question/list/question.list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = QuestionList;
  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private auth: AuthService) {
    this.initialize();
    this.authenticate();
    this.pages = [
      { title: 'Preguntas', icon: 'chatbubbles', component: QuestionList },
      { title: 'Biografía', icon: 'person', component: Biography },
      { title: 'Conferéncia', icon: 'map', component: Conference },
      { title: 'Software Libre', icon: 'information-circle', component: FreeSoft }
    ];
  }

  initialize() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  authenticate() {
    if (!this.auth.isLogged()) {
      this.auth.logIn();
    }
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
