import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectExamResultGraphComponent } from './subject-exam-result-graph.component';

describe('SubjectExamResultGraphComponent', () => {
  let component: SubjectExamResultGraphComponent;
  let fixture: ComponentFixture<SubjectExamResultGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectExamResultGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectExamResultGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
