import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExamenComponent } from './dashboard-examen.component';

describe('DashboardExamenComponent', () => {
  let component: DashboardExamenComponent;
  let fixture: ComponentFixture<DashboardExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
