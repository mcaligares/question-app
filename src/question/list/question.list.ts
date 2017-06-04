import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EVENT } from '../../config/config.const';
import { IQuestion } from '../iquestion';
import { QuestionService } from '../question.service';

@Component({
  selector: 'question-list',
  templateUrl: 'question.list.html'
})
export class QuestionList {
  questions: IQuestion[];
  eventName: string = EVENT;

  constructor(public navCtrl: NavController, private service: QuestionService) {
    service.getAll().then(questions => this.questions = questions);
  }

}
