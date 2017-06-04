import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Content } from '../content';

@Component({
  selector: 'content-conference',
  templateUrl: 'conference.html'
})
export class Conference extends Content {

  constructor(public navCtrl: NavController) {
    super();
  }

}
