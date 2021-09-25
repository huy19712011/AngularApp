import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocateMeComponent } from './locate-me.component';

describe('LocateMeComponent', () => {
  let component: LocateMeComponent;
  let fixture: ComponentFixture<LocateMeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
