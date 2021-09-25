import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubjectBasicInfoComponent } from './subject-basic-info.component';

describe('SubjectBasicInfoComponent', () => {
  let component: SubjectBasicInfoComponent;
  let fixture: ComponentFixture<SubjectBasicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
