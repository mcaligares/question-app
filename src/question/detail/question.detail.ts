import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IQuestion } from '../iquestion';
import { AuthService } from '../../utils/auth.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'question-detail',
  templateUrl: 'question.detail.html'
})
export class QuestionDetail {
  @Input() data: IQuestion;

  constructor(public navCtrl: NavController,
              private auth: AuthService,
              private service: QuestionService) {

  }

  givePoint() {
    let likes = this.data.likes;
    let me = this.auth.getSessionKey();
    if (!this.service.alreadyLiked(me, likes)) {
      this.service.givePoint(this.data);
      this.data.points ++;
    }
  }

}
