import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionExamenComponent } from './add-session-examen.component';

describe('AddSessionExamenComponent', () => {
  let component: AddSessionExamenComponent;
  let fixture: ComponentFixture<AddSessionExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSessionExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSessionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
