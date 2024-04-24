import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningExamensInactiveComponent } from './list-planning-examens-inactive.component';

describe('ListPlanningExamensInactiveComponent', () => {
  let component: ListPlanningExamensInactiveComponent;
  let fixture: ComponentFixture<ListPlanningExamensInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanningExamensInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanningExamensInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
