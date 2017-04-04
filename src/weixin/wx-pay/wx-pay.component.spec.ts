import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxPayComponent } from './wx-pay.component';

describe('WxPayComponent', () => {
  let component: WxPayComponent;
  let fixture: ComponentFixture<WxPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
