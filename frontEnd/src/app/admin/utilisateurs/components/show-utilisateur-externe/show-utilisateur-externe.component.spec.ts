import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUtilisateurExterneComponent } from './show-utilisateur-externe.component';

describe('ShowUtilisateurExterneComponent', () => {
  let component: ShowUtilisateurExterneComponent;
  let fixture: ComponentFixture<ShowUtilisateurExterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUtilisateurExterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUtilisateurExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
