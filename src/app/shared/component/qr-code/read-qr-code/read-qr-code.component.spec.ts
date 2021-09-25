import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReadQrCodeComponent } from './read-qr-code.component';

describe('ReadQrCodeComponent', () => {
  let component: ReadQrCodeComponent;
  let fixture: ComponentFixture<ReadQrCodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadQrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
