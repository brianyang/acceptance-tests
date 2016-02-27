exports.config = {
    specs: ['*.js'],
    capabilities: {
            browserName: 'chrome'
        },
    baseUrl: 'http://localhost:3000',
    framework: 'jasmine',
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
};


