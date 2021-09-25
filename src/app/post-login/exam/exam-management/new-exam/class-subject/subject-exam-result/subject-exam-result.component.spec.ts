import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectExamResultComponent } from './subject-exam-result.component';

describe('SubjectExamResultComponent', () => {
  let component: SubjectExamResultComponent;
  let fixture: ComponentFixture<SubjectExamResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectExamResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
