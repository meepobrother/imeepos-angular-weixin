"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WxPayComponent = (function () {
    function WxPayComponent() {
        this._pay = false; //是否发起支付
        this.paySuccess = new core_1.EventEmitter();
    }
    Object.defineProperty(WxPayComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (val) {
            this._config = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WxPayComponent.prototype, "pay", {
        get: function () {
            return this._pay;
        },
        set: function (val) {
            console.log(this._config);
            this._pay = val;
            if (this._pay) {
                this.chooseWXPay();
            }
        },
        enumerable: true,
        configurable: true
    });
    WxPayComponent.prototype.ngOnInit = function () {
        //this.chooseWXPay()
    };
    WxPayComponent.prototype.chooseWXPay = function () {
        var _this = this;
        wx.ready(function () {
            wx.chooseWXPay({
                timestamp: _this._config.timestamp,
                nonceStr: _this._config.nonceStr,
                package: _this._config.package,
                signType: _this._config.signType,
                paySign: _this._config.paySign,
                success: function (res) {
                    _this.paySuccess.emit(res);
                }
            });
        });
    };
    return WxPayComponent;
}());
__decorate([
    core_1.Input()
], WxPayComponent.prototype, "config", null);
__decorate([
    core_1.Input()
], WxPayComponent.prototype, "pay", null);
__decorate([
    core_1.Output()
], WxPayComponent.prototype, "paySuccess", void 0);
WxPayComponent = __decorate([
    core_1.Component({
        selector: 'app-wx-pay',
        templateUrl: './wx-pay.component.html',
        styleUrls: ['./wx-pay.component.css']
    })
], WxPayComponent);
exports.WxPayComponent = WxPayComponent;
