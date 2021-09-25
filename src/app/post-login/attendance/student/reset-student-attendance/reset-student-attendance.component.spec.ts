import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetStudentAttendanceComponent } from './reset-student-attendance.component';

describe('ResetStudentAttendanceComponent', () => {
  let component: ResetStudentAttendanceComponent;
  let fixture: ComponentFixture<ResetStudentAttendanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetStudentAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetStudentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
