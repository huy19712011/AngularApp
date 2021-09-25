import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormProfilePicComponent } from './form-profile-pic.component';

describe('FormProfilePicComponent', () => {
  let component: FormProfilePicComponent;
  let fixture: ComponentFixture<FormProfilePicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProfilePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
