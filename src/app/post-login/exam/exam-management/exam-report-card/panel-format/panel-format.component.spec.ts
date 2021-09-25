import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PanelFormatComponent } from './panel-format.component';

describe('PanelFormatComponent', () => {
  let component: PanelFormatComponent;
  let fixture: ComponentFixture<PanelFormatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
