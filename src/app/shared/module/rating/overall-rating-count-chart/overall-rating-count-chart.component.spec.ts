import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverallRatingCountChartComponent } from './overall-rating-count-chart.component';

describe('OverallRatingCountChartComponent', () => {
  let component: OverallRatingCountChartComponent;
  let fixture: ComponentFixture<OverallRatingCountChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallRatingCountChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallRatingCountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
