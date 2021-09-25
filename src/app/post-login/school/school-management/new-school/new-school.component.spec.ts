import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewSchoolComponent } from './new-school.component';

describe('NewSchoolComponent', () => {
  let component: NewSchoolComponent;
  let fixture: ComponentFixture<NewSchoolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
