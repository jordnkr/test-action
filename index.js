const core = require('@actions/core');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver;
  driver = await new WebDriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
  
  const testUrl = core.getInput('url');
  await driver.get(testUrl);
  
  const builder = new AxeBuilder(driver);
  
  builder.analyze((err, results) => {
    if (err) {
      // Handle error
    }
    console.log(results);
  });
  await driver.quit();
})();