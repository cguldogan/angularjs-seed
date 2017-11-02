'use strict';


angular.module('home',[])
.controller('ctrl',['$scope',function($scope) {
  var vm = $scope;
  vm.myName = 'ctrl';
}]);