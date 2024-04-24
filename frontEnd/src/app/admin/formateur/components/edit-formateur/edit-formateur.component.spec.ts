import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormateurComponent } from './edit-formateur.component';

describe('EditFormateurComponent', () => {
  let component: EditFormateurComponent;
  let fixture: ComponentFixture<EditFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
