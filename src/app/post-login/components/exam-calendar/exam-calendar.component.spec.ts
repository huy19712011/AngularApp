import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamCalendarComponent } from './exam-calendar.component';

describe('ExamCalendarComponent', () => {
  let component: ExamCalendarComponent;
  let fixture: ComponentFixture<ExamCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
