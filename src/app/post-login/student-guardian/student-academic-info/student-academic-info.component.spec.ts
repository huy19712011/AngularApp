import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentAcademicInfoComponent } from './student-academic-info.component';

describe('StudentAcademicInfoComponent', () => {
  let component: StudentAcademicInfoComponent;
  let fixture: ComponentFixture<StudentAcademicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAcademicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAcademicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
