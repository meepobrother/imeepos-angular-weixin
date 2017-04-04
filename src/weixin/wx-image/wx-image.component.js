"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WxImageComponent = (function () {
    function WxImageComponent() {
        //isShowProgressTips
        this.isShowProgressTips = false;
        //开始上传
        this._start = false;
        //上传成功后
        this.uploadSuccess = new core_1.EventEmitter();
    }
    WxImageComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(WxImageComponent.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WxImageComponent.prototype, "show", {
        get: function () {
            return this.isShowProgressTips;
        },
        set: function (val) {
            this.isShowProgressTips = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WxImageComponent.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (val) {
            this._start = val;
            this.chooseImage();
        },
        enumerable: true,
        configurable: true
    });
    WxImageComponent.prototype.chooseImage = function () {
        var _this = this;
        wx.ready(function () {
            wx.chooseImage({
                count: _this._count,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: function (res) {
                    var localIds = res.localIds;
                    _this.uploadImage(localIds);
                }
            });
        });
    };
    WxImageComponent.prototype.uploadImage = function (localIds) {
        var _this = this;
        var localId = localIds.pop();
        wx.ready(function () {
            wx.uploadImage({
                localId: localId,
                isShowProgressTips: _this.isShowProgressTips,
                success: function (res) {
                    var serverId = res.serverId;
                    _this.uploadSuccess.emit(serverId);
                }
            });
        });
        if (localIds.length > 0) {
            this.uploadImage(localIds);
        }
    };
    return WxImageComponent;
}());
__decorate([
    core_1.Input()
], WxImageComponent.prototype, "count", null);
__decorate([
    core_1.Input()
], WxImageComponent.prototype, "show", null);
__decorate([
    core_1.Input()
], WxImageComponent.prototype, "start", null);
__decorate([
    core_1.Output()
], WxImageComponent.prototype, "uploadSuccess", void 0);
WxImageComponent = __decorate([
    core_1.Component({
        selector: 'app-wx-image',
        templateUrl: './wx-image.component.html',
        styleUrls: ['./wx-image.component.css']
    })
], WxImageComponent);
exports.WxImageComponent = WxImageComponent;
