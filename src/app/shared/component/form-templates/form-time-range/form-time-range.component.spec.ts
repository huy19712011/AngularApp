import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormTimeRangeComponent } from './form-time-range.component';

describe('FormTimeRangeComponent', () => {
  let component: FormTimeRangeComponent;
  let fixture: ComponentFixture<FormTimeRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTimeRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTimeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
