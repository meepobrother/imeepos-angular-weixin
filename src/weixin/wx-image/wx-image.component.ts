import {Component, EventEmitter, OnInit, Output,Input} from '@angular/core';
declare var wx;

@Component({
  selector: 'app-wx-image',
  templateUrl: './wx-image.component.html',
  styleUrls: ['./wx-image.component.css']
})
export class WxImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  //附件个数
  _count: number;
  @Input()
  get count(){
    return this._count
  }
  set count(val: number){
    this._count = val;
  }

  //isShowProgressTips
  isShowProgressTips: boolean = false;
  @Input()
  get show(){
    return this.isShowProgressTips;
  }
  set show(val: boolean){
    this.isShowProgressTips = val;
  }

  //开始上传
  _start: boolean = false;
  @Input()
  get start(){
    return this._start;
  }
  set start(val: boolean){
    this._start = val;
    this.chooseImage();
  }

  //上传成功后
  @Output() uploadSuccess: EventEmitter<string> = new EventEmitter()

  chooseImage(){
    wx.ready(()=>{
      wx.chooseImage({
        count: this._count,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res)=>{
          let localIds = res.localIds;
          this.uploadImage(localIds)
        }
      })
    })
  }

  uploadImage(localIds: string[]){
    let localId = localIds.pop();
    wx.ready(()=>{
      wx.uploadImage({
        localId: localId,
        isShowProgressTips: this.isShowProgressTips,
        success: (res)=>{
          let serverId = res.serverId;
          this.uploadSuccess.emit(serverId)
        }
      });
    });

    if(localIds.length > 0){
      this.uploadImage(localIds)
    }
  }

}
