import { Injectable } from '@angular/core';

import { IQuestion } from './iquestion';
import { SAMPLE_QUESTIONS } from './sample.data';

@Injectable()
export class QuestionService {

  getAll(): Promise<IQuestion[]> {
    return Promise.resolve(SAMPLE_QUESTIONS);
  }

}
