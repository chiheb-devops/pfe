import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExamenComponent } from './session-examen.component';

describe('SessionExamenComponent', () => {
  let component: SessionExamenComponent;
  let fixture: ComponentFixture<SessionExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
