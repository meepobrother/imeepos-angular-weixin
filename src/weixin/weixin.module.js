"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var wx_location_component_1 = require("./wx-location/wx-location.component");
var wx_share_component_1 = require("./wx-share/wx-share.component");
var wx_image_component_1 = require("./wx-image/wx-image.component");
var wx_record_component_1 = require("./wx-record/wx-record.component");
var wx_pay_component_1 = require("./wx-pay/wx-pay.component");
var wx_location_component_2 = require("./wx-location/wx-location.component");
exports.WxLocationComponent = wx_location_component_2.WxLocationComponent;
var wx_share_component_2 = require("./wx-share/wx-share.component");
exports.WxShareComponent = wx_share_component_2.WxShareComponent;
var wx_image_component_2 = require("./wx-image/wx-image.component");
exports.WxImageComponent = wx_image_component_2.WxImageComponent;
var wx_record_component_2 = require("./wx-record/wx-record.component");
exports.WxRecordComponent = wx_record_component_2.WxRecordComponent;
var wx_pay_component_2 = require("./wx-pay/wx-pay.component");
exports.WxPayComponent = wx_pay_component_2.WxPayComponent;
var WeixinModule = (function () {
    function WeixinModule() {
    }
    return WeixinModule;
}());
WeixinModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        exports: [
            wx_location_component_1.WxLocationComponent,
            wx_share_component_1.WxShareComponent,
            wx_image_component_1.WxImageComponent,
            wx_record_component_1.WxRecordComponent,
            wx_pay_component_1.WxPayComponent
        ],
        declarations: [
            wx_location_component_1.WxLocationComponent,
            wx_share_component_1.WxShareComponent,
            wx_image_component_1.WxImageComponent,
            wx_record_component_1.WxRecordComponent,
            wx_pay_component_1.WxPayComponent
        ]
    })
], WeixinModule);
exports.WeixinModule = WeixinModule;
