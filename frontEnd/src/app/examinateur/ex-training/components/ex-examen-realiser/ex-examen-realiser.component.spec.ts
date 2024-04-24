import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExExamenRealiserComponent } from './ex-examen-realiser.component';

describe('ExExamenRealiserComponent', () => {
  let component: ExExamenRealiserComponent;
  let fixture: ComponentFixture<ExExamenRealiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExExamenRealiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExExamenRealiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
