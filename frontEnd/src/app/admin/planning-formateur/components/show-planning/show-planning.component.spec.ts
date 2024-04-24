import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlanningComponent } from './show-planning.component';

describe('ShowPlanningComponent', () => {
  let component: ShowPlanningComponent;
  let fixture: ComponentFixture<ShowPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
