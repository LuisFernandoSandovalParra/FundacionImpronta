import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoProjectComponent } from './dialog-info-project.component';

describe('DialogInfoProjectComponent', () => {
  let component: DialogInfoProjectComponent;
  let fixture: ComponentFixture<DialogInfoProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInfoProjectComponent]
    });
    fixture = TestBed.createComponent(DialogInfoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
