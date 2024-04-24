import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionExamenInactiveComponent } from './list-session-examen-inactive.component';

describe('ListSessionExamenInactiveComponent', () => {
  let component: ListSessionExamenInactiveComponent;
  let fixture: ComponentFixture<ListSessionExamenInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSessionExamenInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionExamenInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
