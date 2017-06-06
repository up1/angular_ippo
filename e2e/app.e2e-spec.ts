import { HelloPage } from './app.po';

describe('hello App', () => {
  let page: HelloPage;

  beforeEach(() => {
    page = new HelloPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
