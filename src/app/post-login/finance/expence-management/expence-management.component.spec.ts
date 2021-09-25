import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpenceManagementComponent } from './expence-management.component';

describe('ExpenceManagementComponent', () => {
  let component: ExpenceManagementComponent;
  let fixture: ComponentFixture<ExpenceManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
