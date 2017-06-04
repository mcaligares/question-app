import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IQuestion } from '../iquestion';
import { QuestionService } from '../question.service';

@Component({
  selector: 'question-detail',
  templateUrl: 'question.detail.html'
})
export class QuestionDetail {
  @Input() data: IQuestion;

  constructor(public navCtrl: NavController,
              private service: QuestionService) {

  }

  givePoint() {
    this.service.givePoint(this.data);
    this.data.points ++;
  }

}
