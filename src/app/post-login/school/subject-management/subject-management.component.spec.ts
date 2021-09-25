import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectManagementComponent } from './subject-management.component';

describe('SubjectManagementComponent', () => {
  let component: SubjectManagementComponent;
  let fixture: ComponentFixture<SubjectManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
