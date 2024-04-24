import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFormationProchaineComponent } from './ex-formation-prochaine.component';

describe('ExFormationProchaineComponent', () => {
  let component: ExFormationProchaineComponent;
  let fixture: ComponentFixture<ExFormationProchaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExFormationProchaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExFormationProchaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
