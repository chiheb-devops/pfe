import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursComponent } from './add-cours.component';

describe('AddCoursComponent', () => {
  let component: AddCoursComponent;
  let fixture: ComponentFixture<AddCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
