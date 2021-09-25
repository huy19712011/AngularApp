import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FineManagementComponent } from './fine-management.component';

describe('FineManagementComponent', () => {
  let component: FineManagementComponent;
  let fixture: ComponentFixture<FineManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FineManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
