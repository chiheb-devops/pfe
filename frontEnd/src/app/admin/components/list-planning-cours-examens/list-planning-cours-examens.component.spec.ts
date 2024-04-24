import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningCoursExamensComponent } from './list-planning-cours-examens.component';

describe('ListPlanningCoursExamensComponent', () => {
  let component: ListPlanningCoursExamensComponent;
  let fixture: ComponentFixture<ListPlanningCoursExamensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanningCoursExamensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanningCoursExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
