import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningExamensComponent } from './list-planning-examens.component';

describe('ListPlanningExamensComponent', () => {
  let component: ListPlanningExamensComponent;
  let fixture: ComponentFixture<ListPlanningExamensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanningExamensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanningExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
