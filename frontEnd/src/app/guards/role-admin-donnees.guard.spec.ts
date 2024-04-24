import { TestBed } from '@angular/core/testing';

import { RoleAdminDonneesGuard } from './role-admin-donnees.guard';

describe('RoleAdminDonneesGuard', () => {
  let guard: RoleAdminDonneesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleAdminDonneesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
