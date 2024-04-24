import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCalenderFormaionComponent } from './ex-calender-formaion.component';

describe('ExCalenderFormaionComponent', () => {
  let component: ExCalenderFormaionComponent;
  let fixture: ComponentFixture<ExCalenderFormaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCalenderFormaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCalenderFormaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
