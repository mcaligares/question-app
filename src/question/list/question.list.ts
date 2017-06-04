import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EVENT } from '../../config/config.const';
import { IQuestion } from '../iquestion';
import { QuestionService } from '../question.service';
import { QuestionDetail } from '../detail/question.detail';
import { QuestionCreate } from '../create/question.create';
import { AuthService } from '../../utils/auth.service';

@Component({
  selector: 'question-list',
  templateUrl: 'question.list.html'
})
export class QuestionList {
  questions: IQuestion[];
  eventName: string = EVENT;

  constructor(public navCtrl: NavController,
              private service: QuestionService,
              private auth: AuthService) {
    if (!auth.isLogged()) {
      auth.logIn();
    }
  }

  ionViewWillEnter() {
    this.service.getAll().then(questions => this.questions = questions);
  }

  questionDetail(question: IQuestion) {
    this.navCtrl.push(QuestionDetail, question);
  }

  newQuestion() {
    this.navCtrl.push(QuestionCreate);
  }

}
