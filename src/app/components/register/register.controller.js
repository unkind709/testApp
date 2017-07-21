(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController($log, $rootScope, $state) {
        var vm = this;
        $rootScope.navbarFlag = false;

        vm.currentPage = 1;

        vm.previousPage = function() {
            vm.currentPage--;
             $log.debug(vm.currentPage);
        }
        vm.nextPage = function() {
            vm.currentPage++;
            $log.debug(vm.currentPage);
        }
        vm.confirmPage = function() {
            $state.go('login');
        }
    }
})();