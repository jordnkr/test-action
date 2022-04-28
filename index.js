const core = require('@actions/core');
const AxeBuilder = require('@axe-core/webdriverjs');
const WebDriver = require('selenium-webdriver');

(async function example() {
  var chromeCapabilities = WebDriver.Capabilities.chrome();
  
  //setting chrome options to start the browser fully maximized
  var chromeOptions = {
      'args': ['--start-maximized', '--headless']
  };
  chromeCapabilities.set('chromeOptions', chromeOptions);
  
  let driver = await new WebDriver.Builder().withCapabilities(chromeCapabilities).forBrowser('chrome').build();
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
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q'));.sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }*/
})();