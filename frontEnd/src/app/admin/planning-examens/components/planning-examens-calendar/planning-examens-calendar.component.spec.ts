import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningExamensCalendarComponent } from './planning-examens-calendar.component';

describe('PlanningExamensCalendarComponent', () => {
  let component: PlanningExamensCalendarComponent;
  let fixture: ComponentFixture<PlanningExamensCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningExamensCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningExamensCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
