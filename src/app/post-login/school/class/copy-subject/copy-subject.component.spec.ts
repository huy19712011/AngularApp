import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CopySubjectComponent } from './copy-subject.component';

describe('CopySubjectComponent', () => {
  let component: CopySubjectComponent;
  let fixture: ComponentFixture<CopySubjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CopySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
