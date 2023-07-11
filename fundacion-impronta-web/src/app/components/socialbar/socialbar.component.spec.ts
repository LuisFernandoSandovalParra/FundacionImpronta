import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbarComponent } from './socialbar.component';

describe('SocialbarComponent', () => {
  let component: SocialbarComponent;
  let fixture: ComponentFixture<SocialbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialbarComponent]
    });
    fixture = TestBed.createComponent(SocialbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
