angular.module('myApp')
  .config(
    ['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: '../src/view1/view1.html',
        controller: 'View1Ctrl',
      })
      .when('/view1',{
        templateUrl: '../src/view1/view1.html',
        controller: 'View1Ctrl',
      })
    }])