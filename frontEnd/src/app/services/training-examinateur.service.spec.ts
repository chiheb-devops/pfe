import { TestBed } from '@angular/core/testing';

import { TrainingExaminateurService } from './training-examinateur.service';

describe('TrainingExaminateurService', () => {
  let service: TrainingExaminateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingExaminateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
