(function() {
    'use strict';

    angular.module('app', [
        // App components

        // Libraries
        'ui.router',
        'ngResource'
    ]).run(run);

    run.$inject = ['stateHandler'];
    function run(stateHandler) {
        // Initalize stateHandler
        stateHandler.initialize();
    }

})();
