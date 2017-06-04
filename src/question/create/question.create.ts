import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuestionService } from '../question.service';
import { QUESTION_LABEL } from '../../config/config.const';

@Component({
  selector: 'question-create',
  templateUrl: 'question.create.html'
})
export class QuestionCreate {
  question: string;
  label: string = QUESTION_LABEL;

  constructor(public navCtrl: NavController,
              private service: QuestionService) {

  }

  createQuestion() {
    this.service.create(this.question);
    this.navCtrl.popToRoot();
  }

}
