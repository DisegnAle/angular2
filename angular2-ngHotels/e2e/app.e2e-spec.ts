import { SoaHotelBackupPage } from './app.po';

describe('soa-hotel-backup App', function() {
  let page: SoaHotelBackupPage;

  beforeEach(() => {
    page = new SoaHotelBackupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
