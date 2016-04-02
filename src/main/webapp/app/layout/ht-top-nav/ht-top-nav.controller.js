(function() {
    'use strict';

    angular
        .module('app')
        .controller('HtTopNavController', HtTopNavController);

    HtTopNavController.$inject = ['$location', '$state'];
    function HtTopNavController ($location, $state) {
        var vm = this;
        vm.$state = $state;
    }
})();
