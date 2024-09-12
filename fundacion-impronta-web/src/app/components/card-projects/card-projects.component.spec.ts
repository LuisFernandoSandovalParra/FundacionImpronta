import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectsComponent } from './card-projects.component';

describe('CardProjectsComponent', () => {
  let component: CardProjectsComponent;
  let fixture: ComponentFixture<CardProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProjectsComponent]
    });
    fixture = TestBed.createComponent(CardProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
