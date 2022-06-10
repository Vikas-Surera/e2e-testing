// import LoginAccount from './actions/loginAccount';
declare const page: any;
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
    await page.waitFor( 2000 );
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
//     const login = new LoginAccount(page);
  });
});
