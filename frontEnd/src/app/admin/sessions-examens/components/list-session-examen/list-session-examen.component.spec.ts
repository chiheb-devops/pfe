import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionExamenComponent } from './list-session-examen.component';

describe('ListSessionExamenComponent', () => {
  let component: ListSessionExamenComponent;
  let fixture: ComponentFixture<ListSessionExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSessionExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
