import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlannigComponent } from './update-plannig.component';

describe('UpdatePlannigComponent', () => {
  let component: UpdatePlannigComponent;
  let fixture: ComponentFixture<UpdatePlannigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlannigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlannigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
