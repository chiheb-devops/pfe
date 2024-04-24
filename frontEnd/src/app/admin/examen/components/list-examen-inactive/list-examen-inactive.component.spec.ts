import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExamenInactiveComponent } from './list-examen-inactive.component';

describe('ListExamenInactiveComponent', () => {
  let component: ListExamenInactiveComponent;
  let fixture: ComponentFixture<ListExamenInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExamenInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExamenInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
