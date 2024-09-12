import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinfoComponent } from './cardinfo.component';

describe('CardinfoComponent', () => {
  let component: CardinfoComponent;
  let fixture: ComponentFixture<CardinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardinfoComponent]
    });
    fixture = TestBed.createComponent(CardinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
