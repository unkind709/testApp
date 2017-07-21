(function () {
    'use strict';

    angular
        .module('testApp')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($log, $rootScope, $state) {
        var vm = this;
        $rootScope.navbarFlag = false;

        vm.confirm = function() {
            $state.go('home');
        }
    }
})();