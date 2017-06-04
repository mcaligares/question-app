import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Content } from '../content';

@Component({
  selector: 'content-bio',
  templateUrl: 'biography.html'
})
export class Biography extends Content {

  constructor(public navCtrl: NavController) {
    super();
  }

}
