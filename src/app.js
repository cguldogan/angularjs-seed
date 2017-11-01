var angular = require('angular');


require('angular-route');
require('./view1/view1');

angular.module('myApp', [
    'ngRoute',
    'myApp.view1'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);