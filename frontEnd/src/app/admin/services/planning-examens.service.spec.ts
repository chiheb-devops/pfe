import { TestBed } from '@angular/core/testing';

import { PlanningExamensService } from './planning-examens.service';

describe('PlanningExamensService', () => {
  let service: PlanningExamensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanningExamensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
