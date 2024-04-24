import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormateurComponent } from './list-formateur.component';

describe('ListFormateurComponent', () => {
  let component: ListFormateurComponent;
  let fixture: ComponentFixture<ListFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
