import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExaminateurComponent } from './show-examinateur.component';

describe('ShowExaminateurComponent', () => {
  let component: ShowExaminateurComponent;
  let fixture: ComponentFixture<ShowExaminateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowExaminateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExaminateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
