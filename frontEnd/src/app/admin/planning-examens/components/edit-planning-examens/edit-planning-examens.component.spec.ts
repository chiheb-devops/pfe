import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanningExamensComponent } from './edit-planning-examens.component';

describe('EditPlanningExamensComponent', () => {
  let component: EditPlanningExamensComponent;
  let fixture: ComponentFixture<EditPlanningExamensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlanningExamensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlanningExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
