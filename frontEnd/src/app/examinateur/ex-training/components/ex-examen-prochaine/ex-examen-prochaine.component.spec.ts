import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExExamenProchaineComponent } from './ex-examen-prochaine.component';

describe('ExExamenProchaineComponent', () => {
  let component: ExExamenProchaineComponent;
  let fixture: ComponentFixture<ExExamenProchaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExExamenProchaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExExamenProchaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
