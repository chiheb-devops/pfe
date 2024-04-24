import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExChangePasswordComponent } from './ex-change-password.component';

describe('ExChangePasswordComponent', () => {
  let component: ExChangePasswordComponent;
  let fixture: ComponentFixture<ExChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
