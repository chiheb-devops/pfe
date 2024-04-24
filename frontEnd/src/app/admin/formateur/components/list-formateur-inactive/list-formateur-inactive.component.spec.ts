import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormateurInactiveComponent } from './list-formateur-inactive.component';

describe('ListFormateurInactiveComponent', () => {
  let component: ListFormateurInactiveComponent;
  let fixture: ComponentFixture<ListFormateurInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormateurInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormateurInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
