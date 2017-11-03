'use strict';

var routeConfig = angular.module('App').config(
    ['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '../src/home/index.html',
        controller: 'homeController'
      })
      .when('/view1',{
        templateUrl: '../src/home/index.html',
        controller: 'homeController'
      });
    }]);

module.exports = routeConfig;