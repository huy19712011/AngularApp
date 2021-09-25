import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamManagementComponent } from './exam-management.component';

describe('ExamManagementComponent', () => {
  let component: ExamManagementComponent;
  let fixture: ComponentFixture<ExamManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
