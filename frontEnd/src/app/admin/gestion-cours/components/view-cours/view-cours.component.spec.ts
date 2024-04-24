import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCoursComponent } from './view-cours.component';

describe('ViewCoursComponent', () => {
  let component: ViewCoursComponent;
  let fixture: ComponentFixture<ViewCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
