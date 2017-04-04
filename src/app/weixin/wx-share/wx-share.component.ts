import {Component, OnInit, Input, Output, EventEmitter, Injectable} from '@angular/core';
declare var wx;
/*
*  微信分享组件用法
*  title: string 分享标题
*  desc: string 分享简介
*  image: string 分享图标
*  url: string 分享链接
*  shareSuccess: Function 分享成功
*  shareCancel: Function 分享取消
*  dataUrl: string 分享多媒体链接
*  type: stiring 分享类型 music/video/link
*/
export interface WxShare{
  title: string;
  desc: string;
  image: string;
  url: string;
  shareSuccess: Function;
  shareCancel: Function;
  dataUrl: string;
  type: string;
}

// 初始化微信分享数据
export function initWxShare(): WxShare {
  return {
    title: '杭州米波网络科技有限公司',
    desc: '联系扣扣: 1037483576 姓名: 杨明明',
    image: 'http://meepo.com.cn/logo2.jpg',
    type: 'link',
    dataUrl: '',
    url: 'http://meepo.com.cn',
    shareSuccess: (e)=>{
      console.log(e);
    },
    shareCancel: (e)=>{
      console.log(e);
    }
  }
}

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

@Component({
  selector: 'app-wx-share',
  templateUrl: './wx-share.component.html',
  styleUrls: ['./wx-share.component.css']
})
export class WxShareComponent implements OnInit {

  // 分享成功
  @Output() shareSuccess: EventEmitter<string> = new EventEmitter()
  // 分享失败
  @Output() shareCancel: EventEmitter<string> = new EventEmitter()

  constructor() {
    this._options = initWxShare()
  }

  ngOnInit() {
    this.initShare();
  }

  _options: WxShare;
  @Input()
  get options(){
    return this._options;
  }
  set options(val: WxShare){
    if(val){
      this._options = val;
    }
  }

  initShare(){
    // 分享给朋友
    this.onMenuShareAppMessage()
    // 分享到QQ
    this.onMenuShareQQ()
    // 分享到QQ空间
    this.onMenuShareQZone()
    // 分享到朋友圈
    this.onMenuShareTimeline()
    // 分享到腾讯微博
    this.onMenuShareWeibo()
  }
  // 分享到朋友圈
  onMenuShareTimeline(){
    wx.ready(()=>{
      wx.onMenuShareTimeline({
        title: this._options.title,
        link: this._options.url,
        imgUrl: this._options.image,
        success: ()=>{
          this.shareSuccess.emit('timeline')
        },
        cancel: ()=>{
          this.shareCancel.emit('timeline');
        }
      });
    })
  }
  // 分享给朋友
  onMenuShareAppMessage(){
    wx.ready(()=>{
      wx.onMenuShareAppMessage({
        title: this._options.title,
        desc: this._options.desc,
        link: this._options.url,
        imgUrl: this._options.image,
        type: this._options.type,
        dataUrl: this._options.dataUrl,
        success: ()=>{
          this.shareSuccess.emit('appmessage')
        },
        cancel: ()=>{
          this.shareCancel.emit('appmessage')
        }
      })
    })
  }
  // 分享到QQ
  onMenuShareQQ(){
    wx.ready(()=>{
      wx.onMenuShareQQ({
        title: this._options.title,
        desc: this._options.desc,
        link: this._options.url,
        imgUrl: this._options.image,
        success: ()=>{
          this.shareSuccess.emit('qq')
        },
        cancel: ()=>{
          this.shareCancel.emit('qq')
        }
      })
    })
  }
  // 分享到腾讯微博
  onMenuShareWeibo(){
    wx.ready(()=>{
      wx.onMenuShareWeibo({
        title: this._options.title,
        desc: this._options.desc,
        link: this._options.url,
        imgUrl: this._options.image,
        success: ()=>{
          this.shareSuccess.emit('weibo')
        },
        cancel: ()=>{
          this.shareCancel.emit('weibo')
        }
      })
    })
  }
  // 分享到QQ空间
  onMenuShareQZone(){
    wx.ready(()=>{
      wx.onMenuShareQZone({
        title: this._options.title,
        desc: this._options.desc,
        link: this._options.url,
        imgUrl: this._options.image,
        success: ()=>{
          this.shareSuccess.emit('qzone')
        },
        cancel: ()=>{
          this.shareCancel.emit('qzone')
        }
      })
    });
  }

}
