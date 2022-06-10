module.exports = function globalTeardown(done) {
    // do stuff which needs to be done before all tests are executed
    console.log('globalTeardown');
    return;
};
