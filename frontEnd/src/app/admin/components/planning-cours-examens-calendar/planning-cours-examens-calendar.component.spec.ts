import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningCoursExamensCalendarComponent } from './planning-cours-examens-calendar.component';

describe('PlanningCoursExamensCalendarComponent', () => {
  let component: PlanningCoursExamensCalendarComponent;
  let fixture: ComponentFixture<PlanningCoursExamensCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningCoursExamensCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningCoursExamensCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
