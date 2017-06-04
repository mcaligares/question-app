import { Injectable } from '@angular/core';

import { IQuestion } from './iquestion';
import { SAMPLE_QUESTIONS } from './sample.data';
import { StorageService } from '../utils/storage.service';

@Injectable()
export class QuestionService {

  constructor(private storage: StorageService) {
    let questions = storage.getObject('questions');
    if (questions.length === undefined) {
      storage.setObject('questions', SAMPLE_QUESTIONS);
    }
  }

  getAll(): Promise<IQuestion[]> {
    return Promise.resolve(this.storage.getObject('questions'));
  }

  get(id: number): Promise<IQuestion> {
    return new Promise<IQuestion>(resolve => {
      this.getAll().then(questions => {
        resolve(this.findQuestion(id, questions));
      });
    });
  }

  findQuestion(id: number, questions: IQuestion[]): IQuestion {
    for (let question of questions) {
      if (question.id === id) return question;
    }
    return null;
  }

  givePoint(question: IQuestion): void {
    this.getAll().then(questions => {
      for (let q of questions) {
        if (q.id === question.id) q.points ++;
      }
      this.storage.setObject('questions', questions);
    });
  }

}
