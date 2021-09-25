import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventBasicInfoComponent } from './event-basic-info.component';

describe('EventBasicInfoComponent', () => {
  let component: EventBasicInfoComponent;
  let fixture: ComponentFixture<EventBasicInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
