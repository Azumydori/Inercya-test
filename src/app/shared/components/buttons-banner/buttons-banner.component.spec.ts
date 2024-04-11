import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBannerComponent } from './buttons-banner.component';

describe('ButtonsBannerComponent', () => {
  let component: ButtonsBannerComponent;
  let fixture: ComponentFixture<ButtonsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
