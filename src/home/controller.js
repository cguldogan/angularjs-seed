'use strict';

homeController.$inject=['$scope','homeFactory'];

function homeController($scope,homeFactory) {
    var vm = $scope;
    vm.myController = 'homeController';
    vm.myFactory = homeFactory.foo();
}

module.exports = homeController;