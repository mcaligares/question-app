import { Injectable } from '@angular/core';

import { IQuestion } from './iquestion';
import { SAMPLE_QUESTIONS } from './sample.data';
import { StorageService } from '../utils/storage.service';

@Injectable()
export class QuestionService {

  constructor(private storage: StorageService) {
    storage.setObject('questions', SAMPLE_QUESTIONS);
  }

  getAll(): Promise<IQuestion[]> {
    return Promise.resolve(this.storage.getObject('questions'));
  }

}
