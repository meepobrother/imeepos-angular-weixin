## 微信定位组件

``` html
<app-wx-location
  (locationSuccess)="locationSuccess($event)"
  [start]="startLocation"
></app-wx-location>
```

``` ts
export class SomeComponent{
  startLocation: boolean = false;
  locationSuccess(event: WxLocation){
    console.log(event);
  }
}

```
