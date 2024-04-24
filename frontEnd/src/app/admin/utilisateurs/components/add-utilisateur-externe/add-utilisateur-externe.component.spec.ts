import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilisateurExterneComponent } from './add-utilisateur-externe.component';

describe('AddUtilisateurExterneComponent', () => {
  let component: AddUtilisateurExterneComponent;
  let fixture: ComponentFixture<AddUtilisateurExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUtilisateurExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilisateurExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
