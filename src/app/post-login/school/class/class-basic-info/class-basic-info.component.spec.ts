import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassBasicInfoComponent } from './class-basic-info.component';

describe('ClassBasicInfoComponent', () => {
  let component: ClassBasicInfoComponent;
  let fixture: ComponentFixture<ClassBasicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
