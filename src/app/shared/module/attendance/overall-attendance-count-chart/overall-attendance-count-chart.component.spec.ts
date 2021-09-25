import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverallAttendanceCountChartComponent } from './overall-attendance-count-chart.component';

describe('OverallAttendanceCountChartComponent', () => {
  let component: OverallAttendanceCountChartComponent;
  let fixture: ComponentFixture<OverallAttendanceCountChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallAttendanceCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallAttendanceCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
