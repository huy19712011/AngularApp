import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PreLoginFooterComponent } from './pre-login-footer.component';

describe('PreLoginFooterComponent', () => {
  let component: PreLoginFooterComponent;
  let fixture: ComponentFixture<PreLoginFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
