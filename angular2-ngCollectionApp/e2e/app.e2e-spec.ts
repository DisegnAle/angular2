import { NgCollectionAppPage } from './app.po';

describe('ng-collection-app App', function() {
  let page: NgCollectionAppPage;

  beforeEach(() => {
    page = new NgCollectionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
