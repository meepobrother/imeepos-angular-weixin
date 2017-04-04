import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxShareComponent } from './wx-share.component';

describe('WxShareComponent', () => {
  let component: WxShareComponent;
  let fixture: ComponentFixture<WxShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
