import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionCoursExamensComponent } from './list-session-cours-examens.component';

describe('ListSessionCoursExamensComponent', () => {
  let component: ListSessionCoursExamensComponent;
  let fixture: ComponentFixture<ListSessionCoursExamensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSessionCoursExamensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionCoursExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
