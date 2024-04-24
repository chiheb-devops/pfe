import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSessionExamenComponent } from './show-session-examen.component';

describe('ShowSessionExamenComponent', () => {
  let component: ShowSessionExamenComponent;
  let fixture: ComponentFixture<ShowSessionExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSessionExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSessionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
