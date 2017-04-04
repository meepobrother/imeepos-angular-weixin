# 微信分享组件用法

## 模板
``` html
<app-wx-share
  [title]="share.title"
  [desc]="share.desc"
  [dataUrl]="share.dateurl"
  [iamge]="share.image"
  [type]="share.type"
  [url]="share.url"
  (shareCancel)="share.shareCancel"
  (shareSuccess)="share.shareSuccess"
></app-wx-share>
```

ts
```ts
export class SomeComponent{
  share: WxShare = initWxShare();
}
```
