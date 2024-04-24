import { TestBed } from '@angular/core/testing';

import { DashboardExamenService } from './dashboard-examen.service';

describe('DashboardExamenService', () => {
  let service: DashboardExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
