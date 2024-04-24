import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCalenderExamenComponent } from './ex-calender-examen.component';

describe('ExCalenderExamenComponent', () => {
  let component: ExCalenderExamenComponent;
  let fixture: ComponentFixture<ExCalenderExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCalenderExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCalenderExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
