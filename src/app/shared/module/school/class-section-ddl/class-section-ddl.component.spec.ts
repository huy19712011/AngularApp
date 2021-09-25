import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassSectionDdlComponent } from './class-section-ddl.component';

describe('ClassSectionDdlComponent', () => {
  let component: ClassSectionDdlComponent;
  let fixture: ComponentFixture<ClassSectionDdlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSectionDdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSectionDdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
