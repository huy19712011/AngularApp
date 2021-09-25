import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouteStoppageInfoComponent } from './route-stoppage-info.component';

describe('RouteStoppageInfoComponent', () => {
  let component: RouteStoppageInfoComponent;
  let fixture: ComponentFixture<RouteStoppageInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStoppageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStoppageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
