import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuestionService } from '../question.service';

@Component({
  selector: 'question-create',
  templateUrl: 'question.create.html'
})
export class QuestionCreate {
  question: string;
  constructor(public navCtrl: NavController,
              private service: QuestionService) {

  }

  createQuestion() {
    this.service.create(this.question);
    this.navCtrl.popToRoot();
  }

}
