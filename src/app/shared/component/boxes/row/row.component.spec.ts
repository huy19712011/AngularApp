import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ROWComponent } from './row.component';

describe('ROWComponent', () => {
  let component: ROWComponent;
  let fixture: ComponentFixture<ROWComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ROWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ROWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
