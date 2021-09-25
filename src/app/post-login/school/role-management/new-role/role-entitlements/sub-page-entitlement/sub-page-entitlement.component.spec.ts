import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubPageEntitlementComponent } from './sub-page-entitlement.component';

describe('SubPageEntitlementComponent', () => {
  let component: SubPageEntitlementComponent;
  let fixture: ComponentFixture<SubPageEntitlementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageEntitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageEntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
