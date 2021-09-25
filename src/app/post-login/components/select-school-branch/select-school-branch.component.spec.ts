import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectSchoolBranchComponent } from './select-school-branch.component';

describe('SelectSchoolBranchComponent', () => {
  let component: SelectSchoolBranchComponent;
  let fixture: ComponentFixture<SelectSchoolBranchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSchoolBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSchoolBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
