import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExCalenderComponent } from './ex-calender.component';

describe('ExCalenderComponent', () => {
  let component: ExCalenderComponent;
  let fixture: ComponentFixture<ExCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
