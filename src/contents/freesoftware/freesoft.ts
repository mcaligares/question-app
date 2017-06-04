import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Content } from '../content';

@Component({
  selector: 'content-freesoft',
  templateUrl: 'freesoft.html'
})
export class FreeSoft extends Content {

  constructor(public navCtrl: NavController) {
    super();
  }

}
