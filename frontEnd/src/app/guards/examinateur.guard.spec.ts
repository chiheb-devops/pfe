import { TestBed } from '@angular/core/testing';

import { ExaminateurGuard } from './examinateur.guard';

describe('ExaminateurGuard', () => {
  let guard: ExaminateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExaminateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
