import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FieldsetComponent } from './fieldset.component';

describe('FieldsetComponent', () => {
  let component: FieldsetComponent;
  let fixture: ComponentFixture<FieldsetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
