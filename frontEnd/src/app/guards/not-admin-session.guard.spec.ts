import { TestBed } from '@angular/core/testing';

import { NotAdminSessionGuard } from './not-admin-session.guard';

describe('NotAdminSessionGuard', () => {
  let guard: NotAdminSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotAdminSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
