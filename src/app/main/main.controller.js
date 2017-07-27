(function() {
    'use strict';

    angular
        .module('testApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log, $scope, $rootScope) {
        var vm = this;
        $rootScope.navbarFlag = true;

        vm.endTime = new Date("July 23, 2017 15:00:00");
        $scope.timerRunning = true;

    }
})();