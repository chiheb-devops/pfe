import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurExterneComponent } from './utilisateur-externe.component';

describe('UtilisateurExterneComponent', () => {
  let component: UtilisateurExterneComponent;
  let fixture: ComponentFixture<UtilisateurExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
