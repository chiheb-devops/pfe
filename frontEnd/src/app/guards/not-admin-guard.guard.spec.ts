import { TestBed } from '@angular/core/testing';

import { NotAdminGuardAllocation } from './not-admin-guard.guard';

describe('NotAdminGuardGuard', () => {
  let guard: NotAdminGuardAllocation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAdminGuardAllocation);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
