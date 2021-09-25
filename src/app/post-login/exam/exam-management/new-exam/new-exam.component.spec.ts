import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewExamComponent } from './new-exam.component';

describe('NewExamComponent', () => {
  let component: NewExamComponent;
  let fixture: ComponentFixture<NewExamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
