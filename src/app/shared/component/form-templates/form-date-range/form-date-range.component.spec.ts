import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormDateRangeComponent } from './form-date-range.component';

describe('FormDateRangeComponent', () => {
  let component: FormDateRangeComponent;
  let fixture: ComponentFixture<FormDateRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
