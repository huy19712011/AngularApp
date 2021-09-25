import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamReportCardComponent } from './exam-report-card.component';

describe('ExamReportCardComponent', () => {
  let component: ExamReportCardComponent;
  let fixture: ComponentFixture<ExamReportCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamReportCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
