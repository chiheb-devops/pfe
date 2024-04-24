import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExaminateurComponent } from './list-examinateur.component';

describe('ListExaminateurComponent', () => {
  let component: ListExaminateurComponent;
  let fixture: ComponentFixture<ListExaminateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExaminateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExaminateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
