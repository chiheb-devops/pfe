import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtilisateurActifComponent } from './edit-utilisateur-actif.component';

describe('EditUtilisateurActifComponent', () => {
  let component: EditUtilisateurActifComponent;
  let fixture: ComponentFixture<EditUtilisateurActifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUtilisateurActifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUtilisateurActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
