import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectTeacherDdlComponent } from './subject-teacher-ddl.component';

describe('SubjectTeacherDdlComponent', () => {
  let component: SubjectTeacherDdlComponent;
  let fixture: ComponentFixture<SubjectTeacherDdlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTeacherDdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTeacherDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
