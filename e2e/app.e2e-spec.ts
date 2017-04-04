import { ImeeposAngularWeixinPage } from './app.po';

describe('imeepos-angular-weixin App', () => {
  let page: ImeeposAngularWeixinPage;

  beforeEach(() => {
    page = new ImeeposAngularWeixinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
