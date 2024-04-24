import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUtilisateurComponent } from './dashboard-utilisateur.component';

describe('DashboardUtilisateurComponent', () => {
  let component: DashboardUtilisateurComponent;
  let fixture: ComponentFixture<DashboardUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
