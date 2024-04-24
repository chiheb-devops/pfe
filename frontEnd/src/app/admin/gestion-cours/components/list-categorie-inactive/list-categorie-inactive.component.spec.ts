import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategorieInactiveComponent } from './list-categorie-inactive.component';

describe('ListCategorieInactiveComponent', () => {
  let component: ListCategorieInactiveComponent;
  let fixture: ComponentFixture<ListCategorieInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategorieInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategorieInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
