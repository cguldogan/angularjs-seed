'use strict';

angular.module('myApp.view1', [])
.controller('View1Ctrl',['$scope',function($scope) {
  var vm = $scope;
  vm.myName = 'Test';
}]);