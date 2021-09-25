import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchoolBranchInfoComponent } from './school-branch-info.component';

describe('SchoolBranchInfoComponent', () => {
  let component: SchoolBranchInfoComponent;
  let fixture: ComponentFixture<SchoolBranchInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolBranchInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBranchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
