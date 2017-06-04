import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IQuestion } from '../iquestion';

@Component({
  selector: 'question-detail',
  templateUrl: 'question.detail.html'
})
export class QuestionDetail {
  data: IQuestion;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.data;
  }

}
