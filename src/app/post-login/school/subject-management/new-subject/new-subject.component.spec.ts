import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewSubjectComponent } from './new-subject.component';

describe('NewSubjectComponent', () => {
  let component: NewSubjectComponent;
  let fixture: ComponentFixture<NewSubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
