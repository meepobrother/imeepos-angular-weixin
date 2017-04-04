"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// 初始化微信分享数据
function initWxShare() {
    return {
        title: '杭州米波网络科技有限公司',
        desc: '联系扣扣: 1037483576 姓名: 杨明明',
        image: 'http://meepo.com.cn/logo2.jpg',
        type: 'link',
        dataUrl: '',
        url: 'http://meepo.com.cn',
        shareSuccess: function (e) {
            console.log(e);
        },
        shareCancel: function (e) {
            console.log(e);
        }
    };
}
exports.initWxShare = initWxShare;
/**
 *  use template
 *  <app-wx-share
 *  [title]="share.title"
 *  [desc]="share.desc"
 *  [dataUrl]="share.dateurl"
 *  [iamge]="share.image"
 *  [type]="share.type"
 *  [url]="share.url"
 *  (shareCancel)="share.shareCancel"
 *  (shareSuccess)="share.shareSuccess"
 *  ></app-wx-share>
  use ts
  share: WxShare = initWxShare();
 *
 * */
var WxShareComponent = (function () {
    function WxShareComponent() {
        // 分享成功
        this.shareSuccess = new core_1.EventEmitter();
        // 分享失败
        this.shareCancel = new core_1.EventEmitter();
        this._options = initWxShare();
    }
    WxShareComponent.prototype.ngOnInit = function () {
        this.initShare();
    };
    Object.defineProperty(WxShareComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            if (val) {
                this._options = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    WxShareComponent.prototype.initShare = function () {
        // 分享给朋友
        this.onMenuShareAppMessage();
        // 分享到QQ
        this.onMenuShareQQ();
        // 分享到QQ空间
        this.onMenuShareQZone();
        // 分享到朋友圈
        this.onMenuShareTimeline();
        // 分享到腾讯微博
        this.onMenuShareWeibo();
    };
    // 分享到朋友圈
    WxShareComponent.prototype.onMenuShareTimeline = function () {
        var _this = this;
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: _this._options.title,
                link: _this._options.url,
                imgUrl: _this._options.image,
                success: function () {
                    _this.shareSuccess.emit('timeline');
                },
                cancel: function () {
                    _this.shareCancel.emit('timeline');
                }
            });
        });
    };
    // 分享给朋友
    WxShareComponent.prototype.onMenuShareAppMessage = function () {
        var _this = this;
        wx.ready(function () {
            wx.onMenuShareAppMessage({
                title: _this._options.title,
                desc: _this._options.desc,
                link: _this._options.url,
                imgUrl: _this._options.image,
                type: _this._options.type,
                dataUrl: _this._options.dataUrl,
                success: function () {
                    _this.shareSuccess.emit('appmessage');
                },
                cancel: function () {
                    _this.shareCancel.emit('appmessage');
                }
            });
        });
    };
    // 分享到QQ
    WxShareComponent.prototype.onMenuShareQQ = function () {
        var _this = this;
        wx.ready(function () {
            wx.onMenuShareQQ({
                title: _this._options.title,
                desc: _this._options.desc,
                link: _this._options.url,
                imgUrl: _this._options.image,
                success: function () {
                    _this.shareSuccess.emit('qq');
                },
                cancel: function () {
                    _this.shareCancel.emit('qq');
                }
            });
        });
    };
    // 分享到腾讯微博
    WxShareComponent.prototype.onMenuShareWeibo = function () {
        var _this = this;
        wx.ready(function () {
            wx.onMenuShareWeibo({
                title: _this._options.title,
                desc: _this._options.desc,
                link: _this._options.url,
                imgUrl: _this._options.image,
                success: function () {
                    _this.shareSuccess.emit('weibo');
                },
                cancel: function () {
                    _this.shareCancel.emit('weibo');
                }
            });
        });
    };
    // 分享到QQ空间
    WxShareComponent.prototype.onMenuShareQZone = function () {
        var _this = this;
        wx.ready(function () {
            wx.onMenuShareQZone({
                title: _this._options.title,
                desc: _this._options.desc,
                link: _this._options.url,
                imgUrl: _this._options.image,
                success: function () {
                    _this.shareSuccess.emit('qzone');
                },
                cancel: function () {
                    _this.shareCancel.emit('qzone');
                }
            });
        });
    };
    return WxShareComponent;
}());
__decorate([
    core_1.Output()
], WxShareComponent.prototype, "shareSuccess", void 0);
__decorate([
    core_1.Output()
], WxShareComponent.prototype, "shareCancel", void 0);
__decorate([
    core_1.Input()
], WxShareComponent.prototype, "options", null);
WxShareComponent = __decorate([
    core_1.Component({
        selector: 'app-wx-share',
        templateUrl: './wx-share.component.html',
        styleUrls: ['./wx-share.component.css']
    })
], WxShareComponent);
exports.WxShareComponent = WxShareComponent;
