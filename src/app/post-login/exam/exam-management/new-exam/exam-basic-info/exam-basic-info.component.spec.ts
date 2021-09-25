import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamBasicInfoComponent } from './exam-basic-info.component';

describe('ExamBasicInfoComponent', () => {
  let component: ExamBasicInfoComponent;
  let fixture: ComponentFixture<ExamBasicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
