import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFormationRealiserComponent } from './ex-formation-realiser.component';

describe('ExFormationRealiserComponent', () => {
  let component: ExFormationRealiserComponent;
  let fixture: ComponentFixture<ExFormationRealiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExFormationRealiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExFormationRealiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
