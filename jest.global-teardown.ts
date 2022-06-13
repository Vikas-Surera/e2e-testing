const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer');
module.exports = function globalTeardown() {
    // do stuff which needs to be done before all tests are executed
    console.log('globalTeardown');
    teardownPuppeteer();
    return;
};
