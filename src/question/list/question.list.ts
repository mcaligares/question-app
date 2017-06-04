import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EVENT } from '../../config/config.const';

@Component({
  selector: 'question-list',
  templateUrl: 'question.list.html'
})
export class QuestionList {
  eventName: string = EVENT;
  constructor(public navCtrl: NavController) {

  }

}
