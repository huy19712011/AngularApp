import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreLoginMenuComponent } from './pre-login-menu.component';

describe('PreLoginMenuComponent', () => {
  let component: PreLoginMenuComponent;
  let fixture: ComponentFixture<PreLoginMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
