import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursInactiveComponent } from './list-cours-inactive.component';

describe('ListCoursInactiveComponent', () => {
  let component: ListCoursInactiveComponent;
  let fixture: ComponentFixture<ListCoursInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoursInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
