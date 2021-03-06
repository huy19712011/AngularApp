import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleMaintenanceInfoComponent } from './vehicle-maintenance-info.component';

describe('VehicleMaintenanceInfoComponent', () => {
  let component: VehicleMaintenanceInfoComponent;
  let fixture: ComponentFixture<VehicleMaintenanceInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMaintenanceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMaintenanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
