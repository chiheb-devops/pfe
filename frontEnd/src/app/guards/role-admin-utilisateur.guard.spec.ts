import { TestBed } from '@angular/core/testing';

import { RoleAdminUtilisateurGuard } from './role-admin-utilisateur.guard';

describe('RoleAdminUtilisateurGuard', () => {
  let guard: RoleAdminUtilisateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleAdminUtilisateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
