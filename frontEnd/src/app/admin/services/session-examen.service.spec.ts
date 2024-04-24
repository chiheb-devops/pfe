import { TestBed } from '@angular/core/testing';

import { SessionExamenService } from './session-examen.service';

describe('SessionExamenService', () => {
  let service: SessionExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
