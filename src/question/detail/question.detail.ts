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
  disableQuestion: boolean;

  constructor(public navCtrl: NavController,
              private auth: AuthService,
              private service: QuestionService) {
  }

  ngOnInit() {
    let me = this.auth.getSessionKey();
    this.service.get(this.data.id).then((question) => {
      this.disableQuestion = this.service.alreadyLiked(me, question.likes);
    });
  }

  givePoint() {
    let me = this.auth.getSessionKey();
    let givePointIfIsAllowed = (question) => {
      if (!this.service.alreadyLiked(me, question.likes)) {
        this.service.givePoint(question);
        this.data.points ++;
        this.disableQuestion = true;
      }
    }
    this.service.get(this.data.id).then(givePointIfIsAllowed);
  }

}
