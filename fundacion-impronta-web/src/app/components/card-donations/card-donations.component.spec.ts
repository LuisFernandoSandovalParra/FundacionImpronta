import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDonationsComponent } from './card-donations.component';

describe('CardDonationsComponent', () => {
  let component: CardDonationsComponent;
  let fixture: ComponentFixture<CardDonationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDonationsComponent]
    });
    fixture = TestBed.createComponent(CardDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
