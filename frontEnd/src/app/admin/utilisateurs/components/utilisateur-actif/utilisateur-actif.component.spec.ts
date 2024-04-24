import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurActifComponent } from './utilisateur-actif.component';

describe('UtilisateurActifComponent', () => {
  let component: UtilisateurActifComponent;
  let fixture: ComponentFixture<UtilisateurActifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurActifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
