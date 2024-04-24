import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExShowProfilComponent } from './ex-show-profil.component';

describe('ExShowProfilComponent', () => {
  let component: ExShowProfilComponent;
  let fixture: ComponentFixture<ExShowProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExShowProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExShowProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
