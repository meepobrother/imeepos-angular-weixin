import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxImageComponent } from './wx-image.component';

describe('WxImageComponent', () => {
  let component: WxImageComponent;
  let fixture: ComponentFixture<WxImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
