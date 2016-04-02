(function() {
    'use strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];
    function stateConfig($stateProvider) {
        $stateProvider.state('about', {
            parent: 'app',
            url: '/about',
            data: {},
            views: {
                'content@': {
                    templateUrl: 'app/about/about.html'
                }
            }
        });
    }
})();
