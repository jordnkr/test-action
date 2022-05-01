const core = require('@actions/core');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver;
  driver = await new WebDriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
  
  const testUrl = core.getInput('url');
  await driver.get(testUrl);

  const axe = new AxeBuilder(driver);
  const result = await axe.analyze();

  console.log('axe violations:')
  console.log(result.violations);
})();