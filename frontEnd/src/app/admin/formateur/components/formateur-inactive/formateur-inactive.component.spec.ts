import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurInactiveComponent } from './formateur-inactive.component';

describe('FormateurInactiveComponent', () => {
  let component: FormateurInactiveComponent;
  let fixture: ComponentFixture<FormateurInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
