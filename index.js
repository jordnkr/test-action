const core = require('@actions/core');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');

const driver = new WebDriver.Builder().forBrowser('chrome').build();
const testUrl = core.getInput('url');

driver.get(testUrl).then(() => {
  new AxeBuilder(driver).analyze((err, results) => {
    if (err) {
      // Handle error somehow
    }
    console.log(results);
  });
});