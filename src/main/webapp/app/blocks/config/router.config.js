(function() {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);

    routerConfig.$inject = ['$urlRouterProvider'];

    function routerConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
})();
