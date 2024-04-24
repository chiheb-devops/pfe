import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSessionExamenComponent } from './edit-session-examen.component';

describe('EditSessionExamenComponent', () => {
  let component: EditSessionExamenComponent;
  let fixture: ComponentFixture<EditSessionExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSessionExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSessionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
