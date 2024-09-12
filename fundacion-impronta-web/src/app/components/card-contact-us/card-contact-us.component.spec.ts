import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactUsComponent } from './card-contact-us.component';

describe('CardContactUsComponent', () => {
  let component: CardContactUsComponent;
  let fixture: ComponentFixture<CardContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardContactUsComponent]
    });
    fixture = TestBed.createComponent(CardContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
