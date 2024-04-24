import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfilComponent } from './show-profil.component';

describe('ShowProfilComponent', () => {
  let component: ShowProfilComponent;
  let fixture: ComponentFixture<ShowProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
