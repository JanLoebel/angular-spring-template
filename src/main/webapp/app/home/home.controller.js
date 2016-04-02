(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['RandomService'];
    function HomeController(RandomService) {
        var vm = this;
        vm.loadRandomNumber = loadRandomNumber;

        // Initalize
        loadRandomNumber();

        function loadRandomNumber() {
            vm.random = 'Loading...';
            RandomService.get().$promise.then(function(result) {
                vm.random = result.randomNumber;
            }).catch(function() {
                vm.random = 'Error while loading!';
            });
        }
    }
})();
