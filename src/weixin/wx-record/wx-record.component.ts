import {Component, EventEmitter, OnInit,Input,Output} from '@angular/core';
declare var wx;

export interface WxRecord{
  serverId: string;
  localId: string;
  time: number;
}

@Component({
  selector: 'app-wx-record',
  templateUrl: './wx-record.component.html',
  styleUrls: ['./wx-record.component.css']
})
export class WxRecordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  _playTime: number = 0;
  _playTimeCtrl: any;
  _recordTime: number = 0;
  _recordTimeCtrl: any;

  // 开始播放
  _playStart: boolean =false;
  @Input()
  get playStart(){
    return this._playStart
  }
  set playStart(val: boolean){
    this._playStart = val;
    if(this._playStart){
      this._playTime = 0;
      this.playVoice()
    }
  }

  playVoice(){
    wx.ready(()=>{
      // 开始计时
      this._playTimeCtrl = setInterval(()=>{
        this._playTime ++;
      },1000);
      wx.playVoice({
        localId: this._localId
      })
    })
  }
  // 暂停播放
  _playPause: boolean = false;
  @Input()
  get playPause(){
    return this._playPause
  }
  set playPause(val: boolean){
    this._playPause = val;
    if(this._playPause){
      clearInterval(this._playTimeCtrl)
      this.pauseVoice()
    }
  }

  pauseVoice(){
    wx.ready(()=>{
      wx.pauseVoice({
        localId: this._localId
      })
    })
  }

  // 暂停播放
  _playStop: boolean = false;
  @Input()
  get playStop(){
    return this._playStop
  }
  set playStop(val: boolean){
    this._playStop = val;
    if(this._playStop){
      clearInterval(this._playTimeCtrl)
      this.stopVoice()
    }
  }

  stopVoice(){
    wx.ready(()=>{
      wx.stopVoice({
        localId: this._localId
      })
    })
  }

  // 播放完毕
  @Output() playEnd: EventEmitter<string> = new EventEmitter()
  onVoicePlayEnd(){
    wx.ready(()=>{
      wx.onVoicePlayEnd({
        success: (res)=>{
          clearInterval(this._playTimeCtrl)
          this._playTime = 0;
          this._localId = res.localId;
          this.playEnd.emit(this._localId)
        }
      })
    })
  }

  // 下载语音文件
  @Output() downloadSuccess: EventEmitter<string> = new EventEmitter()
  _serverId: string = '';
  @Input()
  get serverId(){
    return this._serverId
  }
  set serverId(val: string){
    this._serverId = val;
    this.downloadVoice()
  }

  downloadVoice(){
    wx.ready(()=>{
      wx.downloadVoice({
        serverId: this._serverId,
        isShowProgressTips: this.isShowProgressTips,
        success:(res)=>{
          this._localId = res.localId;
          this.downloadSuccess.emit(this._localId)
        }
      })
    })
  }

  //本地资源
  _localId: string = '';
  @Input()
  get localId(){
    return this._localId
  }
  set localId(val: string){
    this._localId = val;
    this._playTime = 0;
  }
  //开始录音
  _recordStart: boolean = false;
  @Input()
  get recordStart(){
    return this._recordStart;
  }
  set recordStart(val: boolean){
    this._recordStart = val;
    if(this._recordStart){
      this._recordTime = 0;
      this.startRecord()
    }
  }
  //暂停录音
  _recordStop: boolean = false;
  @Input()
  get recordStop(){
    return this._recordStop;
  }
  set recordStop(val: boolean){
    this._recordStop = val;
    if(this._recordStop){
      this.stopRecord()
    }
  }
  //上传完成
  @Output() recordSuccess: EventEmitter<WxRecord> = new EventEmitter()

  startRecord(){
    this._recordTimeCtrl = setInterval(()=>{
      this._recordTime ++;
    },1000)
    wx.ready(()=>{
      wx.startRecord();
    })
  }

  stopRecord(){
    wx.ready(()=>{
      wx.stopRecord({
        success: (res)=>{
          clearInterval(this._recordTimeCtrl)
          this._localId = res.localId;
          this.uploadVoice()
        }
      })
    })
  }

  onVoiceRecordEnd(){
    wx.ready(()=>{
      wx.onVoiceRecordEnd({
        complete: (res)=>{
          clearInterval(this._recordTimeCtrl)
          this._localId = res.localId;
          this.uploadVoice()
        }
      })
    })
  }

  isShowProgressTips: number = 1;

  uploadVoice(){
    wx.ready(()=>{
      wx.uploadVoice({
        localId: this._localId,
        isShowProgressTips: this.isShowProgressTips,
        success: (res)=>{
          this._serverId = res.serverId
          let wxrecord: WxRecord = {
            serverId: this._serverId,
            localId: this._localId,
            time: this._recordTime
          }
          this.recordSuccess.emit(wxrecord)
        }
      })
    })
  }

}
