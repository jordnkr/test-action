const core = require('@actions/core');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');

(async function example() {
  var chromeCapabilities = WebDriver.Capabilities.chrome();
  
  var chromeOptions = {
      'args': ['--headless', '--no-sandbox', '--remote-debugging-port=9222']
  };
  chromeCapabilities.set('chromeOptions', chromeOptions);
  
  let driver = await new WebDriver.Builder().withCapabilities(chromeCapabilities).build();
  /*const testUrl = core.getInput('url');

  driver.get(testUrl).then(() => {
    new AxeBuilder(driver).analyze((err, results) => {
      if (err) {
        // Handle error somehow
      }
      console.log(results);
    });
  });*/

  try {
    await driver.get('http://www.google.com');
  } finally {
    await driver.quit();
  }
})();