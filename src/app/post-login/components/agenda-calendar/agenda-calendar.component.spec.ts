import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgendaCalendarComponent } from './agenda-calendar.component';

describe('AgendaCalendarComponent', () => {
  let component: AgendaCalendarComponent;
  let fixture: ComponentFixture<AgendaCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
