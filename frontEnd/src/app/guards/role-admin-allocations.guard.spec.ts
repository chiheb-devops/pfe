import { TestBed } from '@angular/core/testing';

import { RoleAdminAllocationsGuard } from './role-admin-allocations.guard';

describe('RoleAdminAllocationsGuard', () => {
  let guard: RoleAdminAllocationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleAdminAllocationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
