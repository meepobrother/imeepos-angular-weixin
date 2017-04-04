import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WxLocationComponent } from './wx-location/wx-location.component';
import { WxShareComponent } from './wx-share/wx-share.component';
import { WxImageComponent } from './wx-image/wx-image.component';
import { WxRecordComponent } from './wx-record/wx-record.component';
import { WxPayComponent } from './wx-pay/wx-pay.component';

export { WxLocationComponent,WxLocation } from './wx-location/wx-location.component';
export { WxShareComponent,WxShare,initWxShare } from './wx-share/wx-share.component';
export { WxImageComponent } from './wx-image/wx-image.component';
export { WxRecordComponent,WxRecord } from './wx-record/wx-record.component';
export { WxPayComponent,WxPay } from './wx-pay/wx-pay.component';

declare var wx;

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WxLocationComponent,
    WxShareComponent,
    WxImageComponent,
    WxRecordComponent,
    WxPayComponent
  ],
  declarations: [
    WxLocationComponent,
    WxShareComponent,
    WxImageComponent,
    WxRecordComponent,
    WxPayComponent
  ]
})
export class WeixinModule { }
