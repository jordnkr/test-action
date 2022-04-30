const core = require('@actions/core');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver;
  try {
    driver = await new WebDriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
    const testUrl = core.getInput('url');
    await driver.get(testUrl);
    new AxeBuilder(driver).analyze((err, results) => {
      if (err) {
        // Handle error
      }
      console.log(results);
    });
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
})();