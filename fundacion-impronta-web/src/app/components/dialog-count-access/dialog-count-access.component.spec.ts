import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCountAccessComponent } from './dialog-count-access.component';

describe('DialogCountAccessComponent', () => {
  let component: DialogCountAccessComponent;
  let fixture: ComponentFixture<DialogCountAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCountAccessComponent]
    });
    fixture = TestBed.createComponent(DialogCountAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
