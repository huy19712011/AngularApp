import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewExamTypeComponent } from './new-exam-type.component';

describe('NewExamTypeComponent', () => {
  let component: NewExamTypeComponent;
  let fixture: ComponentFixture<NewExamTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExamTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExamTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
