import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardProfileComponent } from './employee-card-profile.component';

describe('EmployeeCardProfileComponent', () => {
  let component: EmployeeCardProfileComponent;
  let fixture: ComponentFixture<EmployeeCardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeCardProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeCardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
