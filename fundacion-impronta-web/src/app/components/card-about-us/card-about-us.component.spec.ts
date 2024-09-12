import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAboutUsComponent } from './card-about-us.component';

describe('CardAboutUsComponent', () => {
  let component: CardAboutUsComponent;
  let fixture: ComponentFixture<CardAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAboutUsComponent]
    });
    fixture = TestBed.createComponent(CardAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
