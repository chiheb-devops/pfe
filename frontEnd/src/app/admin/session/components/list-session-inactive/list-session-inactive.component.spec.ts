import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionInactiveComponent } from './list-session-inactive.component';

describe('ListSessionInactiveComponent', () => {
  let component: ListSessionInactiveComponent;
  let fixture: ComponentFixture<ListSessionInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSessionInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
