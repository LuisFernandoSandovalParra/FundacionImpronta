import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVolunteersComponent } from './card-volunteers.component';

describe('CardVolunteersComponent', () => {
  let component: CardVolunteersComponent;
  let fixture: ComponentFixture<CardVolunteersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVolunteersComponent]
    });
    fixture = TestBed.createComponent(CardVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
