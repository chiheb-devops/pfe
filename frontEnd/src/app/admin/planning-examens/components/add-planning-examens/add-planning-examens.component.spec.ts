import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanningExamensComponent } from './add-planning-examens.component';

describe('AddPlanningExamensComponent', () => {
  let component: AddPlanningExamensComponent;
  let fixture: ComponentFixture<AddPlanningExamensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlanningExamensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanningExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
