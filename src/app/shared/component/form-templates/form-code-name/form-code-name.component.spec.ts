import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormCodeNameComponent } from './form-code-name.component';

describe('FormCodeNameComponent', () => {
  let component: FormCodeNameComponent;
  let fixture: ComponentFixture<FormCodeNameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCodeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCodeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
