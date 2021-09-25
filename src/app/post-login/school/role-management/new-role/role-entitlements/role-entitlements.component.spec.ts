import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoleEntitlementsComponent } from './role-entitlements.component';

describe('RoleEntitlementsComponent', () => {
  let component: RoleEntitlementsComponent;
  let fixture: ComponentFixture<RoleEntitlementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleEntitlementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleEntitlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
