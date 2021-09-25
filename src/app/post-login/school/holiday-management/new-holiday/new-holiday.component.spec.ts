import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewHolidayComponent } from './new-holiday.component';

describe('NewHolidayComponent', () => {
  let component: NewHolidayComponent;
  let fixture: ComponentFixture<NewHolidayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
