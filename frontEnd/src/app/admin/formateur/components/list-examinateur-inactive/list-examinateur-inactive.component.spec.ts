import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExaminateurInactiveComponent } from './list-examinateur-inactive.component';

describe('ListExaminateurInactiveComponent', () => {
  let component: ListExaminateurInactiveComponent;
  let fixture: ComponentFixture<ListExaminateurInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExaminateurInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExaminateurInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
