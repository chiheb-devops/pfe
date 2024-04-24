import { TestBed } from '@angular/core/testing';

import { RoleAdminSessionsGuard } from './role-admin-sessions.guard';

describe('RoleAdminSessionsGuard', () => {
  let guard: RoleAdminSessionsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleAdminSessionsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
