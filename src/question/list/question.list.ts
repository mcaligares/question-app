import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EVENT } from '../../config/config.const';
import { IQuestion } from '../iquestion';
import { QuestionService } from '../question.service';
import { QuestionDetail } from '../detail/question.detail';
import { QuestionCreate } from '../create/question.create';

@Component({
  selector: 'question-list',
  templateUrl: 'question.list.html'
})
export class QuestionList {
  questions: IQuestion[];
  eventName: string = EVENT;

  constructor(public navCtrl: NavController,
              private service: QuestionService) {

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

  openWeb() {
    window.open('http://www.stallmanenjujuy.org/','_system');
  }

}
