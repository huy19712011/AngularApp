import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormUserMedicalInfoComponent } from './form-user-medical-info.component';

describe('FormUserMedicalInfoComponent', () => {
  let component: FormUserMedicalInfoComponent;
  let fixture: ComponentFixture<FormUserMedicalInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserMedicalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserMedicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
