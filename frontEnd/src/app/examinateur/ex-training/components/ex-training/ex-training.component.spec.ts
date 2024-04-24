import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExTrainingComponent } from './ex-training.component';

describe('ExTrainingComponent', () => {
  let component: ExTrainingComponent;
  let fixture: ComponentFixture<ExTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
