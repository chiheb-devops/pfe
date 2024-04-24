import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningCoursExamensInactiveComponent } from './list-planning-cours-examens-inactive.component';

describe('ListPlanningCoursExamensInactiveComponent', () => {
  let component: ListPlanningCoursExamensInactiveComponent;
  let fixture: ComponentFixture<ListPlanningCoursExamensInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanningCoursExamensInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanningCoursExamensInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
