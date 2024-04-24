import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExProfilComponent } from './ex-profil.component';

describe('ExProfilComponent', () => {
  let component: ExProfilComponent;
  let fixture: ComponentFixture<ExProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
