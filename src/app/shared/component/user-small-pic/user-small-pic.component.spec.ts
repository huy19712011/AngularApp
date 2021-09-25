import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserSmallPicComponent } from './user-small-pic.component';

describe('UserSmallPicComponent', () => {
  let component: UserSmallPicComponent;
  let fixture: ComponentFixture<UserSmallPicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSmallPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSmallPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
