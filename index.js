const core = require('@actions/core');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  var driver = await new WebDriver.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless', '--no-sandbox')).build();
  const testUrl = core.getInput('url');

  driver.get(testUrl).then(() => {
    new AxeBuilder(driver).analyze((err, results) => {
      if (err) {
        // Handle error somehow
      }
      console.log(results);
    });
  });

  /*try {
    await driver.get('http://www.google.com');
  } finally {
    await driver.quit();
  }*/
})();