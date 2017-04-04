"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WxRecordComponent = (function () {
    function WxRecordComponent() {
        this._playTime = 0;
        this._recordTime = 0;
        // 开始播放
        this._playStart = false;
        // 暂停播放
        this._playPause = false;
        // 暂停播放
        this._playStop = false;
        // 播放完毕
        this.playEnd = new core_1.EventEmitter();
        // 下载语音文件
        this.downloadSuccess = new core_1.EventEmitter();
        this._serverId = '';
        //本地资源
        this._localId = '';
        //开始录音
        this._recordStart = false;
        //暂停录音
        this._recordStop = false;
        //上传完成
        this.recordSuccess = new core_1.EventEmitter();
        this.isShowProgressTips = 1;
    }
    WxRecordComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(WxRecordComponent.prototype, "playStart", {
        get: function () {
            return this._playStart;
        },
        set: function (val) {
            this._playStart = val;
            if (this._playStart) {
                this._playTime = 0;
                this.playVoice();
            }
        },
        enumerable: true,
        configurable: true
    });
    WxRecordComponent.prototype.playVoice = function () {
        var _this = this;
        wx.ready(function () {
            // 开始计时
            _this._playTimeCtrl = setInterval(function () {
                _this._playTime++;
            }, 1000);
            wx.playVoice({
                localId: _this._localId
            });
        });
    };
    Object.defineProperty(WxRecordComponent.prototype, "playPause", {
        get: function () {
            return this._playPause;
        },
        set: function (val) {
            this._playPause = val;
            if (this._playPause) {
                clearInterval(this._playTimeCtrl);
                this.pauseVoice();
            }
        },
        enumerable: true,
        configurable: true
    });
    WxRecordComponent.prototype.pauseVoice = function () {
        var _this = this;
        wx.ready(function () {
            wx.pauseVoice({
                localId: _this._localId
            });
        });
    };
    Object.defineProperty(WxRecordComponent.prototype, "playStop", {
        get: function () {
            return this._playStop;
        },
        set: function (val) {
            this._playStop = val;
            if (this._playStop) {
                clearInterval(this._playTimeCtrl);
                this.stopVoice();
            }
        },
        enumerable: true,
        configurable: true
    });
    WxRecordComponent.prototype.stopVoice = function () {
        var _this = this;
        wx.ready(function () {
            wx.stopVoice({
                localId: _this._localId
            });
        });
    };
    WxRecordComponent.prototype.onVoicePlayEnd = function () {
        var _this = this;
        wx.ready(function () {
            wx.onVoicePlayEnd({
                success: function (res) {
                    clearInterval(_this._playTimeCtrl);
                    _this._playTime = 0;
                    _this._localId = res.localId;
                    _this.playEnd.emit(_this._localId);
                }
            });
        });
    };
    Object.defineProperty(WxRecordComponent.prototype, "serverId", {
        get: function () {
            return this._serverId;
        },
        set: function (val) {
            this._serverId = val;
            this.downloadVoice();
        },
        enumerable: true,
        configurable: true
    });
    WxRecordComponent.prototype.downloadVoice = function () {
        var _this = this;
        wx.ready(function () {
            wx.downloadVoice({
                serverId: _this._serverId,
                isShowProgressTips: _this.isShowProgressTips,
                success: function (res) {
                    _this._localId = res.localId;
                    _this.downloadSuccess.emit(_this._localId);
                }
            });
        });
    };
    Object.defineProperty(WxRecordComponent.prototype, "localId", {
        get: function () {
            return this._localId;
        },
        set: function (val) {
            this._localId = val;
            this._playTime = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WxRecordComponent.prototype, "recordStart", {
        get: function () {
            return this._recordStart;
        },
        set: function (val) {
            this._recordStart = val;
            if (this._recordStart) {
                this._recordTime = 0;
                this.startRecord();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WxRecordComponent.prototype, "recordStop", {
        get: function () {
            return this._recordStop;
        },
        set: function (val) {
            this._recordStop = val;
            if (this._recordStop) {
                this.stopRecord();
            }
        },
        enumerable: true,
        configurable: true
    });
    WxRecordComponent.prototype.startRecord = function () {
        var _this = this;
        this._recordTimeCtrl = setInterval(function () {
            _this._recordTime++;
        }, 1000);
        wx.ready(function () {
            wx.startRecord();
        });
    };
    WxRecordComponent.prototype.stopRecord = function () {
        var _this = this;
        wx.ready(function () {
            wx.stopRecord({
                success: function (res) {
                    clearInterval(_this._recordTimeCtrl);
                    _this._localId = res.localId;
                    _this.uploadVoice();
                }
            });
        });
    };
    WxRecordComponent.prototype.onVoiceRecordEnd = function () {
        var _this = this;
        wx.ready(function () {
            wx.onVoiceRecordEnd({
                complete: function (res) {
                    clearInterval(_this._recordTimeCtrl);
                    _this._localId = res.localId;
                    _this.uploadVoice();
                }
            });
        });
    };
    WxRecordComponent.prototype.uploadVoice = function () {
        var _this = this;
        wx.ready(function () {
            wx.uploadVoice({
                localId: _this._localId,
                isShowProgressTips: _this.isShowProgressTips,
                success: function (res) {
                    _this._serverId = res.serverId;
                    var wxrecord = {
                        serverId: _this._serverId,
                        localId: _this._localId,
                        time: _this._recordTime
                    };
                    _this.recordSuccess.emit(wxrecord);
                }
            });
        });
    };
    return WxRecordComponent;
}());
__decorate([
    core_1.Input()
], WxRecordComponent.prototype, "playStart", null);
__decorate([
    core_1.Input()
], WxRecordComponent.prototype, "playPause", null);
__decorate([
    core_1.Input()
], WxRecordComponent.prototype, "playStop", null);
__decorate([
    core_1.Output()
], WxRecordComponent.prototype, "playEnd", void 0);
__decorate([
    core_1.Output()
], WxRecordComponent.prototype, "downloadSuccess", void 0);
__decorate([
    core_1.Input()
], WxRecordComponent.prototype, "serverId", null);
__decorate([
    core_1.Input()
], WxRecordComponent.prototype, "localId", null);
__decorate([
    core_1.Input()
], WxRecordComponent.prototype, "recordStart", null);
__decorate([
    core_1.Input()
], WxRecordComponent.prototype, "recordStop", null);
__decorate([
    core_1.Output()
], WxRecordComponent.prototype, "recordSuccess", void 0);
WxRecordComponent = __decorate([
    core_1.Component({
        selector: 'app-wx-record',
        templateUrl: './wx-record.component.html',
        styleUrls: ['./wx-record.component.css']
    })
], WxRecordComponent);
exports.WxRecordComponent = WxRecordComponent;
