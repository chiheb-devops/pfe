import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTrainingComponent } from './feature-training.component';

describe('FeatureTrainingComponent', () => {
  let component: FeatureTrainingComponent;
  let fixture: ComponentFixture<FeatureTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
