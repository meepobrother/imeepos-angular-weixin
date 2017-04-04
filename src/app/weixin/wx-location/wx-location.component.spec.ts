import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxLocationComponent } from './wx-location.component';

describe('WxLocationComponent', () => {
  let component: WxLocationComponent;
  let fixture: ComponentFixture<WxLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
