import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentWholeRatingSearchComponent } from './student-whole-rating-search.component';

describe('StudentWholeRatingSearchComponent', () => {
  let component: StudentWholeRatingSearchComponent;
  let fixture: ComponentFixture<StudentWholeRatingSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentWholeRatingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWholeRatingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
