import { TestBed } from '@angular/core/testing';

import { RoleAdminGlobalGuard } from './role-admin-global.guard';

describe('RoleAdminGlobalGuard', () => {
  let guard: RoleAdminGlobalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleAdminGlobalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
