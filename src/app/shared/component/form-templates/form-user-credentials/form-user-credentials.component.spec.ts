import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormUserCredentialsComponent } from './form-user-credentials.component';

describe('FormUserCredentialsComponent', () => {
  let component: FormUserCredentialsComponent;
  let fixture: ComponentFixture<FormUserCredentialsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
