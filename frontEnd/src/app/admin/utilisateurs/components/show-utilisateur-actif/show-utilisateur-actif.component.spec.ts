import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUtilisateurActifComponent } from './show-utilisateur-actif.component';

describe('ShowUtilisateurActifComponent', () => {
  let component: ShowUtilisateurActifComponent;
  let fixture: ComponentFixture<ShowUtilisateurActifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUtilisateurActifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUtilisateurActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
