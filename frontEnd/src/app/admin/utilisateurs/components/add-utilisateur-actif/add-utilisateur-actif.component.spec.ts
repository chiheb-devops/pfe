import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilisateurActifComponent } from './add-utilisateur-actif.component';

describe('AddUtilisateurActifComponent', () => {
  let component: AddUtilisateurActifComponent;
  let fixture: ComponentFixture<AddUtilisateurActifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUtilisateurActifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilisateurActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
