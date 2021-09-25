import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionFeeComponent } from './section-fee.component';

describe('SectionFeeComponent', () => {
  let component: SectionFeeComponent;
  let fixture: ComponentFixture<SectionFeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
