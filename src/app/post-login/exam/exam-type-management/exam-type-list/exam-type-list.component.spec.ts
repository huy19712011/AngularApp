import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamTypeListComponent } from './exam-type-list.component';

describe('ExamTypeListComponent', () => {
  let component: ExamTypeListComponent;
  let fixture: ComponentFixture<ExamTypeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
