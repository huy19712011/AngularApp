import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamTypeManagementComponent } from './exam-type-management.component';

describe('ExamTypeManagementComponent', () => {
  let component: ExamTypeManagementComponent;
  let fixture: ComponentFixture<ExamTypeManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamTypeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTypeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
