import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecificRatingStudentComponent } from './specific-rating-student.component';

describe('SpecificRatingStudentComponent', () => {
  let component: SpecificRatingStudentComponent;
  let fixture: ComponentFixture<SpecificRatingStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificRatingStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificRatingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
