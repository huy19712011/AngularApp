import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardBoxComponent } from './dashboard-box.component';

describe('DashboardBoxComponent', () => {
  let component: DashboardBoxComponent;
  let fixture: ComponentFixture<DashboardBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
