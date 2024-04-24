import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFournisseurComponent } from './show-fournisseur.component';

describe('ShowFournisseurComponent', () => {
  let component: ShowFournisseurComponent;
  let fixture: ComponentFixture<ShowFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
