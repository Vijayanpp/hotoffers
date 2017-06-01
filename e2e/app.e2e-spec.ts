import { HotofferofthedayPage } from './app.po';

describe('hotofferoftheday App', () => {
  let page: HotofferofthedayPage;

  beforeEach(() => {
    page = new HotofferofthedayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
