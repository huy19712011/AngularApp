import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetStudentRatingComponent } from './reset-student-rating.component';

describe('ResetStudentRatingComponent', () => {
  let component: ResetStudentRatingComponent;
  let fixture: ComponentFixture<ResetStudentRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetStudentRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetStudentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
