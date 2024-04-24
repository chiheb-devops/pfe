import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormateurComponent } from './show-formateur.component';

describe('ShowFormateurComponent', () => {
  let component: ShowFormateurComponent;
  let fixture: ComponentFixture<ShowFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
