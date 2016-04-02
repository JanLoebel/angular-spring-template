'use strict';

var utils = require('./utils');

module.exports = (function() {
    return {
        appName: utils.parseName(),

        // Folder
        app: 'src/main/webapp/',
        appScripts : 'src/main/webapp/app/',
        tmp : 'src/main/webapp/.tmp/',
        dist: 'target/dist/',

        // Ports
        localport: 9000,
        apiHost: 'http://localhost:8080',
        liveReloadPort: 35729,

        // Which urls should be proxied to the API-Port
        proxyRoutes: ['/api']
    };
})();
