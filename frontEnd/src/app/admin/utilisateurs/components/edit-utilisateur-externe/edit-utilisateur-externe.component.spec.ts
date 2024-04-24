import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUtilisateurExterneComponent } from './edit-utilisateur-externe.component';

describe('EditUtilisateurExterneComponent', () => {
  let component: EditUtilisateurExterneComponent;
  let fixture: ComponentFixture<EditUtilisateurExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUtilisateurExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUtilisateurExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
