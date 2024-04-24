import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExMainComponent } from './ex-main.component';

describe('ExMainComponent', () => {
  let component: ExMainComponent;
  let fixture: ComponentFixture<ExMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
