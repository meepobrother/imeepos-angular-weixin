import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxRecordComponent } from './wx-record.component';

describe('WxRecordComponent', () => {
  let component: WxRecordComponent;
  let fixture: ComponentFixture<WxRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
