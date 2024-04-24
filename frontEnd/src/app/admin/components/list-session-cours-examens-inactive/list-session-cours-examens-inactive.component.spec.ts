import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionCoursExamensInactiveComponent } from './list-session-cours-examens-inactive.component';

describe('ListSessionCoursExamensInactiveComponent', () => {
  let component: ListSessionCoursExamensInactiveComponent;
  let fixture: ComponentFixture<ListSessionCoursExamensInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSessionCoursExamensInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionCoursExamensInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
