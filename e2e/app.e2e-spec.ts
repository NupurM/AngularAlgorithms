import { AppPage } from './app.po';

describe('angular-algorithms App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular Algorithms');
  });

  it('should have a counter', () => {
    page.navigateTo();
    expect(page.getCounterValue()).toBeDefined();
  });

  it('should display 0 as counter', () => {
    page.navigateTo();
    expect(page.getCounterValue()).toBe('0');
  });

  it('should increment the counter by 2', () => {
    page.navigateTo();

    page.getCounterIncrementButton().click();
    page.getCounterIncrementButton().click();

    expect(page.getCounterValue()).toBe('2');
  });

  it('should increment the counter by 2, decrement by 3 and then reset to 0', () => {
    page.navigateTo();

    page.getCounterIncrementButton().click();
    page.getCounterIncrementButton().click();

    expect(page.getCounterValue()).toBe('2');

    page.getCounterDecrementButton().click();
    page.getCounterDecrementButton().click();
    page.getCounterDecrementButton().click();

    expect(page.getCounterValue()).toBe('-1');

    page.getCounterResetButton().click();

    expect(page.getCounterValue()).toBe('0');
  });
});
