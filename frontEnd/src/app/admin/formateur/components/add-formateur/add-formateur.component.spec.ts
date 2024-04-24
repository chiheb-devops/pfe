import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormateurComponent } from './add-formateur.component';

describe('AddFormateurComponent', () => {
  let component: AddFormateurComponent;
  let fixture: ComponentFixture<AddFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
