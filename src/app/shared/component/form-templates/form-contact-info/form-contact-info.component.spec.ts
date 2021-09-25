import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormContactInfoComponent } from './form-contact-info.component';

describe('FormContactInfoComponent', () => {
  let component: FormContactInfoComponent;
  let fixture: ComponentFixture<FormContactInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
