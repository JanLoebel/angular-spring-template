(function () {
    'use strict';

    angular
        .module('app')
        .factory('RandomService', RandomService);

    RandomService.$inject = ['$resource'];
    function RandomService($resource) {
        return $resource('api/random', {}, {
            'get' : {method: 'GET', params: {}, isArray: false}
        });
    }
})();
