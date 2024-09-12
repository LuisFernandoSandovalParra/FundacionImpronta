import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHealthTrainingComponent } from './card-health-training.component';

describe('CardHealthTrainingComponent', () => {
  let component: CardHealthTrainingComponent;
  let fixture: ComponentFixture<CardHealthTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHealthTrainingComponent]
    });
    fixture = TestBed.createComponent(CardHealthTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
