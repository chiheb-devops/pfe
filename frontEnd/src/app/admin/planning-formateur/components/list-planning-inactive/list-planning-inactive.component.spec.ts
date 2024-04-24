import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanningInactiveComponent } from './list-planning-inactive.component';

describe('ListPlanningInactiveComponent', () => {
  let component: ListPlanningInactiveComponent;
  let fixture: ComponentFixture<ListPlanningInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanningInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanningInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
