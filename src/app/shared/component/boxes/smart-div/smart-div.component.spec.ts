import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SmartDivComponent } from './smart-div.component';

describe('SmartDivComponent', () => {
  let component: SmartDivComponent;
  let fixture: ComponentFixture<SmartDivComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
