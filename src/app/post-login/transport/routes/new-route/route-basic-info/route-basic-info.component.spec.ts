import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouteBasicInfoComponent } from './route-basic-info.component';

describe('RouteBasicInfoComponent', () => {
  let component: RouteBasicInfoComponent;
  let fixture: ComponentFixture<RouteBasicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
