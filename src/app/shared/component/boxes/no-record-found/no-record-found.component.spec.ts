import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NoRecordFoundComponent } from './no-record-found.component';

describe('NoRecordFoundComponent', () => {
  let component: NoRecordFoundComponent;
  let fixture: ComponentFixture<NoRecordFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRecordFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecordFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
