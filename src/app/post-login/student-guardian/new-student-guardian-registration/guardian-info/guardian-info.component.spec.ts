import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuardianInfoComponent } from './guardian-info.component';

describe('GuardianInfoComponent', () => {
  let component: GuardianInfoComponent;
  let fixture: ComponentFixture<GuardianInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardianInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
