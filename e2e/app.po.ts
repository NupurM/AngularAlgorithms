import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getCounterValue() {
    return element(by.id('counterValue')).getText();
  }

  getCounterIncrementButton() {
    return element(by.cssContainingText('button', 'Increment'));
  }

  getCounterDecrementButton() {
    return element(by.cssContainingText('button', 'Decrement'));
  }

  getCounterResetButton() {
    return element(by.cssContainingText('button', 'Reset'));
  }

}
