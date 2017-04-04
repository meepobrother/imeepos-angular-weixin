"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var WxLocation = (function () {
    function WxLocation(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return WxLocation;
}());
exports.WxLocation = WxLocation;
var WxLocationComponent = (function () {
    function WxLocationComponent() {
        this.locationSuccess = new core_1.EventEmitter();
    }
    WxLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLocation().subscribe(function (res) {
            _this.locationSuccess.emit(res);
        });
    };
    WxLocationComponent.prototype.getLocation = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (r) {
            wx.ready(function () {
                wx.getLocation({
                    type: 'gcj02',
                    success: function (res) {
                        _this.latitude = res.latitude;
                        _this.longitude = res.longitude;
                        var wxlocation = new WxLocation(_this.latitude, _this.longitude);
                        var loc = {
                            lat: res.latitude,
                            lng: res.longitude
                        };
                        r.next(loc);
                        r.complete();
                    }
                });
            });
        });
    };
    return WxLocationComponent;
}());
__decorate([
    core_1.Output()
], WxLocationComponent.prototype, "locationSuccess", void 0);
WxLocationComponent = __decorate([
    core_1.Component({
        selector: 'app-wx-location',
        templateUrl: './wx-location.component.html',
        styleUrls: ['./wx-location.component.css']
    })
], WxLocationComponent);
exports.WxLocationComponent = WxLocationComponent;
