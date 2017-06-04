import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IQuestion } from '../iquestion';
import { QuestionService } from '../question.service';

@Component({
  selector: 'question-detail',
  templateUrl: 'question.detail.html'
})
export class QuestionDetail {
  data: IQuestion;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private service: QuestionService) {
    this.data = navParams.data;
  }

  givePoint() {
    this.service.givePoint(this.data);
    this.data.points ++;
  }

}
