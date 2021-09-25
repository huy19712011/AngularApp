import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DdlStatusComponent } from './ddl-status.component';

describe('DdlStatusComponent', () => {
  let component: DdlStatusComponent;
  let fixture: ComponentFixture<DdlStatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DdlStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdlStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
