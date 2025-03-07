import { TestBed } from '@angular/core/testing';

import { QuizzerService } from './quizzer.service';

describe('QuizzerService', () => {
  let service: QuizzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
