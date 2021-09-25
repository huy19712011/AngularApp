import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormUserBasicInfoComponent } from './form-user-basic-info.component';

describe('FormUserBasicInfoComponent', () => {
  let component: FormUserBasicInfoComponent;
  let fixture: ComponentFixture<FormUserBasicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
