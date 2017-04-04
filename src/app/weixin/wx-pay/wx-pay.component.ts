import {Component, EventEmitter, OnInit,Output,Input} from '@angular/core';
declare var wx;

export interface WxPay{
  timestamp: number;
  nonceStr: string;
  package: string;
  signType: string;
  paySign: string;
  paySuccess: Function;
}

@Component({
  selector: 'app-wx-pay',
  templateUrl: './wx-pay.component.html',
  styleUrls: ['./wx-pay.component.css']
})
export class WxPayComponent implements OnInit {

  constructor() {

  }

  _config: WxPay;

  @Input()
  get config(){
    return this._config;
  }
  set config(val: WxPay){
    this._config = val;
  }

  _pay: boolean = false; //是否发起支付
  @Input()
  get pay(){
    return this._pay;
  }
  set pay(val: boolean){
    console.log(this._config);
    this._pay = val;
    if(this._pay){
      this.chooseWXPay()
    }
  }

  ngOnInit() {
    //this.chooseWXPay()
  }

  @Output() paySuccess: EventEmitter<any> = new EventEmitter()

  chooseWXPay(){
    wx.ready(()=>{
      wx.chooseWXPay({
        timestamp: this._config.timestamp,
        nonceStr: this._config.nonceStr,
        package: this._config.package,
        signType: this._config.signType,
        paySign: this._config.paySign,
        success: (res)=>{
          this.paySuccess.emit(res)
        }
      });
    });
  }

}
