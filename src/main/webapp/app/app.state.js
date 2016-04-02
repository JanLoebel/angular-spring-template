(function() {
    'use strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];
    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'navbar@': {
                    templateUrl: 'app/layout/ht-top-nav/ht-top-nav.html',
                    controller: 'HtTopNavController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
