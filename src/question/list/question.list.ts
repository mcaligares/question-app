import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EVENT } from '../../config/config.const';
import { IQuestion } from '../iquestion';

@Component({
  selector: 'question-list',
  templateUrl: 'question.list.html'
})
export class QuestionList {
  eventName: string = EVENT;
  questions: IQuestion[];

  constructor(public navCtrl: NavController) {
    this.questions = [
      {
        id: 1,
        question: 'que es lo que vo so?',
        points: 10,
        author: 'voviteh',
        date: new Date()
      }
    ]
  }

}
