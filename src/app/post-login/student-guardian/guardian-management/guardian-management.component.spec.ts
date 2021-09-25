import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuardianManagementComponent } from './guardian-management.component';

describe('GuardianManagementComponent', () => {
  let component: GuardianManagementComponent;
  let fixture: ComponentFixture<GuardianManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardianManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
