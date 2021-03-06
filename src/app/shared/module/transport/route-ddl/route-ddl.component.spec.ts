import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RouteDdlComponent } from './route-ddl.component';

describe('RouteDdlComponent', () => {
  let component: RouteDdlComponent;
  let fixture: ComponentFixture<RouteDdlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
