import {Component, OnInit, Output,EventEmitter,Input} from '@angular/core';
import {Observable} from "rxjs";
declare var wx;

export class WxLocation{
  constructor(
    public latitude: number,
    public longitude: number
  ){

  }
}

@Component({
  selector: 'app-wx-location',
  templateUrl: './wx-location.component.html',
  styleUrls: ['./wx-location.component.css']
})
export class WxLocationComponent implements OnInit {
  latitude: number;
  longitude: number;
  @Output() locationSuccess: EventEmitter<WxLocation> = new EventEmitter()

  constructor() {}

  ngOnInit() {
    this.getLocation().subscribe(res=>{
      this.locationSuccess.emit(res)
    })
  }

  getLocation(){
    return Observable.create(r=>{
      wx.ready(()=>{
        wx.getLocation({
          type: 'gcj02',
          success: (res)=>{
            this.latitude = res.latitude;
            this.longitude = res.longitude;
            let wxlocation = new WxLocation(this.latitude,this.longitude)
            let loc = {
              lat: res.latitude,
              lng: res.longitude
            }
            r.next(loc)
            r.complete();
          }
        })
      })
    })

  }

}
