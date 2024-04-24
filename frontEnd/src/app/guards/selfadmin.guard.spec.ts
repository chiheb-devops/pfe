import { TestBed } from '@angular/core/testing';

import { SelfadminGuard } from './selfadmin.guard';

describe('SelfadminGuard', () => {
  let guard: SelfadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SelfadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
