import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchoolManagementComponent } from './school-management.component';

describe('SchoolManagementComponent', () => {
  let component: SchoolManagementComponent;
  let fixture: ComponentFixture<SchoolManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
