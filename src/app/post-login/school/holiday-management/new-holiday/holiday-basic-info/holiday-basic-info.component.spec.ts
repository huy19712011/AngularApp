import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HolidayBasicInfoComponent } from './holiday-basic-info.component';

describe('HolidayBasicInfoComponent', () => {
  let component: HolidayBasicInfoComponent;
  let fixture: ComponentFixture<HolidayBasicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
