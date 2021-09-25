import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarkStudentAttendanceComponent } from './mark-student-attendance.component';

describe('MarkStudentAttendanceComponent', () => {
  let component: MarkStudentAttendanceComponent;
  let fixture: ComponentFixture<MarkStudentAttendanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkStudentAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkStudentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
