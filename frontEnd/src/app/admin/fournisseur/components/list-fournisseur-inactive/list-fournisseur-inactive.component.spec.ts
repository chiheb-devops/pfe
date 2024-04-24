import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFournisseurInactiveComponent } from './list-fournisseur-inactive.component';

describe('ListFournisseurInactiveComponent', () => {
  let component: ListFournisseurInactiveComponent;
  let fixture: ComponentFixture<ListFournisseurInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFournisseurInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFournisseurInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
