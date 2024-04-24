import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlanningExamensComponent } from './show-planning-examens.component';

describe('ShowPlanningExamensComponent', () => {
  let component: ShowPlanningExamensComponent;
  let fixture: ComponentFixture<ShowPlanningExamensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlanningExamensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlanningExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
