import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursExamenComponent } from './list-cours-examen.component';

describe('ListCoursExamenComponent', () => {
  let component: ListCoursExamenComponent;
  let fixture: ComponentFixture<ListCoursExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
