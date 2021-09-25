import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostLoginComponent } from './post-login.component';

describe('PostLoginComponent', () => {
  let component: PostLoginComponent;
  let fixture: ComponentFixture<PostLoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
