import { TestBed } from '@angular/core/testing';

import { UtilisateurGuard } from './utilisateur.guard';

describe('UtilisateurGuard', () => {
  let guard: UtilisateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UtilisateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
