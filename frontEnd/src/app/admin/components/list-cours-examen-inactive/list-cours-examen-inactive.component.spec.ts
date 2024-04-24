import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursExamenInactiveComponent } from './list-cours-examen-inactive.component';

describe('ListCoursExamenInactiveComponent', () => {
  let component: ListCoursExamenInactiveComponent;
  let fixture: ComponentFixture<ListCoursExamenInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursExamenInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursExamenInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
