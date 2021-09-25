import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormUserGovernmentIdsComponent } from './form-user-government-ids.component';

describe('FormUserGovernmentIdsComponent', () => {
  let component: FormUserGovernmentIdsComponent;
  let fixture: ComponentFixture<FormUserGovernmentIdsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserGovernmentIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserGovernmentIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
